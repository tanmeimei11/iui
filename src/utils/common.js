import { 
    U_IN_APPLINKS,
    U_CHAT_APPLINKS
} from 'iConfig'
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
  get isWeChat () { return /MicroMessenger/gi.test(this.ua) },
  get isWeiBo () { return  /Weibo/gi.test(this.ua) },
  get isAndroid () { return /android|adr/gi.test(this.ua) },
  get isIos () { return /iphone|ipod|ipad/gi.test(this.ua) },
  get isInApp () { return /infashion/gi.test(this.ua) },

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
    return !this.isWechat && !this.isWeiBo &&
      this.token != null && this.token.length > 0 &&
      /^(ios|android)$/i.test(this.source) &&
      /^[\d\\.]+$/.test(this.version)
  },

  appScheme () {
    let params = arguments
    return {
      webview: function() { return `in://webview?url=${encodeURIComponent(params[0])}`}
    } 
  },  

  appUri (uri, androidUri, schemeType = 'webview') {
    let appUrlObj = window && window.appUrlObj 
    let appUri = uri
    if (this.isIos) 
        appUri = uri || appUrlObj && appUrlObj.iosMessage
    if (this.isAndroid) 
       appUri = androidUri || uri || appUrlObj && appUrlObj.androidMessage

    if (!appUri) throw new Error('Please input uri ~') 
    
    let appScheme = this.appScheme(appUri)
    if (appScheme[schemeType]) 
        return appScheme[schemeType].call(appUri)

    return appUri
  },

  openInApp (uri, androidUri, appScheme = 'webview') {
    let appUri = this.appUri(uri, androidUri, appScheme)
    let applinks = /in:\/\//.test(appUri) && U_IN_APPLINKS || U_CHAT_APPLINKS
    location.href = [applinks, '?protocol=', encodeURIComponent(appUri)].join('')
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
