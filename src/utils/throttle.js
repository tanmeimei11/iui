let nowFn = Date.now || function() {
  return new Date().getTime()
}
/**
 * 频率控制
 * @param wait  {number} 延迟时间，单位毫秒
 * @param fun {function} 请求关联函数，实际应用需要调用的函数
 * @param options的默认值
 *   表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
 *   options.leading = true
 *   表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
 *   options.trailing = true 
 * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
 * 用法 window.onscroll = throttle(() => { console.log(1) }, 2000)
 * @return {function}    返回客户调用函数
 */

export default (func, wait, options) => {
  let context, args, result
  let timeout = null
  let previous = 0
  if (!options) options = {}
  let later = function() {
    previous = options.leading === false ? 0 : nowFn()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function() {
    let now = nowFn()
    if (!previous && options.leading === false) previous = now
    // 计算剩余时间
    let remaining = wait - (now - previous)
    context = this
    args = arguments
    // 当到达wait指定的时间间隔，则调用func函数
    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
    if (remaining <= 0 || remaining > wait) {
      // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      // options.trailing=true时，延时执行func函数
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}
