/* globals wx */
import { trackParam, combineQuery } from './track'
import common from './common'
import { U_IN_WXSDK } from 'iConfig'
let share = {
  initWXEnd: false,
  _config: {},
  initData (config) {
    this._config = config
    if (this._config.shareTitle) {
      // fix shareImgAddr
      let anchor = document.createElement('a')
      anchor.href = this._config.shareImg
      this._config.shareImg = anchor.href
      common.isWeChat && this.wxConfig()
      common.isInApp && this.inConfig()
    }
  },
  initWx () {
    var shareObj = {
      title: this._config.shareTitle,
      link: this._config.shareLink,
      imgUrl: this._config.shareImg,
      desc: this._config.shareDesc,
      success: () => {
        this._config.shareTrack && trackParam(this._config.shareTrack)
        this._config.success && this._config.success()
      },
      cancel: () => {
        this._config.cancel && this._config.cancel()
      }
    }
    wx.error(function (res) { 
      // alert(JSON.stringify(res))
    })
    wx.ready(function () {
      wx.onMenuShareTimeline(shareObj) 
      wx.onMenuShareAppMessage(shareObj) 
      wx.onMenuShareQQ(shareObj)
      wx.onMenuShareWeibo(shareObj)
      wx.onMenuShareQZone(shareObj)
    })
  },
  wxConfig () {
    if (this.initWXEnd) return this.initWx()
    this.initWXEnd = true
    fetch(`${U_IN_WXSDK}?redirectUrl=${encodeURIComponent(location.href.split('#')[0])}`)
      .then(res => res.json())
      .then(res => {
        if (res.succ) {
          let data = res.data
          wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
              'onMenuShareAppMessage',
              'onMenuShareTimeline',
              'onMenuShareQQ',
              'onMenuShareWeibo',
              'onMenuShareQZone'
            ]
          })
          this.wxConfig()
        }
      })
  },
  inConfig () {
    let shareSet = document.getElementById('shareSet')
    if (shareSet == null) {
      shareSet = document.createElement('div')
      shareSet.setAttribute('id', 'shareSet')
      document.body.appendChild(shareSet)
    }
    var html = []
    for (let key in this._config) {
      let _key = key
      let val = this._config[key]
      if (_key === 'shareImg') {
        html.push(`<input type="hidden" id="shareImgSrc" value="${val}">`)
        html.push(`<input type="hidden" id="shareImgUrl" value="${val}">`)
      } else if (_key === 'shareTrack') {
        _key = 'shareCallback'
        val = combineQuery(val)
      }
      html.push(`<input type="hidden" id="${_key}" value="${val}">`)
    }
    shareSet.innerHTML = html.join('')
  },
  get config () {
    let thisObj = this
    return Object.defineProperties({}, {
      shareTitle: {
        set (value) {
          let _config = thisObj._config
          _config.shareTitle = value
          thisObj.config = _config
        },
        get () { return thisObj._config.shareTitle }
      },
      shareDesc: {
        set (value) {
          let _config = thisObj._config
          _config.shareDesc = value
          thisObj.config = _config
        },
        get () { return thisObj._config.shareDesc }
      },
      shareLink: {
        set (value) {
          let _config = thisObj._config
          _config.shareLink = value
          thisObj.config = _config
        },
        get () { return thisObj._config.shareLink }
      },
      shareImg: {
        set (value) {
          let _config = thisObj._config
          _config.shareImg = value
          thisObj.config = _config
        },
        get () { return thisObj._config.shareImg }
      },
      shareTrack: {
        set (value) {
          let _config = thisObj._config
          _config.shareTrack = value
          thisObj.config = _config
        },
        get () { return thisObj._config.shareTrack }
      }
    })
  },
  set config (config) {
    this.initData(config)
  }
}
export default share
