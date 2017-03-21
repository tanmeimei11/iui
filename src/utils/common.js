function __splitData (str, delimiter, decodeKey, decodeValue) {
  if (str.trim().length === 0) return {}
  let items = str.split(delimiter)
  let info = {}
  items.forEach(item => {
    const _item = item.trim()
    const _idx = _item.indexOf('=')
    if (_idx === -1) {
      info[decodeKey(_item)] = ''
    } else {
      info[decodeKey(_item.substr(0, _idx))] = decodeValue(_item.substr(_idx + 1))
    }
  })
  return info
}

function __getValue (...keys) {
  for (let idx = 0; idx <= keys.length; idx++) {
    let key = keys[idx]
    let val = this.query[key] || this.cookie[key]
    if (val && val.trim().length > 0) {
      return val
    }
  }
}

const common = {
  get weixin () { 
    if (this._isWeixin === undefined) {
      this._isWeixin = /MicroMessenger/gi.test(this.ua)
    }
    return this._isWeixin 
  },

  get weibo () { 
    if (this._isWeibo === undefined) {
      this._isWeibo = /Weibo/gi.test(this.ua) 
    }
    return this._isWeibo 
  },

  // 查询请求
  get query () { 
    return __splitData(
    location.search.substr(1),
    '&',
    key => key.replace(/-+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : ''),
    decodeURIComponent)
  },

  get ua () {
    return window.navigator.userAgent.toLowerCase()
  },
  // 获取版本
  get version () {
    return __getValue.bind(this)('_v', '_version')
  },
  // 获取类型
  get source () {
    return __getValue.bind(this)('_s', '_source')
  },
  // 获取token
  get token () {
    return __getValue.bind(this)('_token', 'tg_auth')
  },

  // 查询cookie
  get cookie () {
    return __splitData(
      document.cookie,
      ';',
      key => key,
      unescape)
  },

  // 设置cookie
  set cookie (val) {
    let {
      name,
      value,
      expiredays
    } = val
    var exdate = new Date()
    const domian = process.env.NODE_ENV === 'production' ? 'in66.com' : ''
    exdate.setDate(exdate.getDate() + expiredays)
    const expireStr = expiredays == null ? '' : ';expires=' + exdate.toGMTString()
    document.cookie = `${name}=${escape(value)};domain=${domian};path=/;${expireStr}`
    return __splitData.bind(this)(document.cookie, ';', key => key, decodeURIComponent)
  },
  /**
   * 判断是否为app内
   * 根据有没有source参数判断
   */
  get InApp () {
    return !this.weixin && !this.weibo &&
      this.token != null && this.token.length > 0 &&
      /^(ios|android)$/i.test(this.source) &&
      /^[\d\\.]+$/.test(this.version)
  },
  /**
   * 判断是否为app内
   * 根据ua判断
   */
  get isInApp () {
    let ua = navigator.userAgent.toLowerCase()
    return /infashion/gi.test(ua)
  },

  openInApp () {
    let appUrlObj = window.appUrlObj
    if (typeof appUrlObj === 'undefined') {
      return false
    }

    let appUrl = ''
    if (this.isIos) {
      appUrl = appUrlObj.iosMessage
    } else if (this.isAndroid) {
      appUrl = appUrlObj.androidMessage
    } else {
      return false
    }
    if (typeof appUrl === 'undefined') {
      return false
    }
    console.log(appUrl)
    let applinks = /in:\/\//.test(appUrl) ? '//m.in66.com/applinks' : '//chat.in66.com/applinks'
    location.href = applinks + '?protocol=' + encodeURIComponent(appUrl)
  },

  initIn () {
    if (this.InApp) {
      var expiredays = 30
      var token = this.query['_token']
      var source = this.query['_s'] || this.cookie['_source']
      var version = this.query['_v'] || this.cookie['_version']
      token && (this.cookie = {
        name: 'tg_auth',
        value: token,
        expiredays: expiredays
      }) && (this.cookie = {
        name: '_token',
        value: token,
        expiredays: expiredays
      })
      source && (this.cookie = {
        name: '_s',
        value: source,
        expiredays: expiredays
      })
      version && (this.cookie = {
        name: '_v',
        value: version,
        expiredays: expiredays
      })
    }
  }
}

export default common

