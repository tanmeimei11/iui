import track from './track'
import common from './common'
import { U_TRACK, U_IN_WXSDK } from 'iConfig'
export default {
  initWXEnd: false,
  initData (config) {
    this._config = config
    if (this._config.shareTitle) {
      common.isWeChat && this.wxConfig()
      common.InApp && this.inConfig()
    }
  },
  initWx () {
    var shareObj = {
      title: this._config.shareTitle,
      link: this._config.shareLink,
      imgUrl: this._config.shareImg,
      desc: this._config.shareDesc,
      success: () => {
        this._config.shareTrack && track(this._config.shareTrack)
        this._config.success && this._config.success()
      },
      cancel: () => {
        this._config.cancel && this._config.cancel()
      }
    }
    wx.error(function (res) { //eslint-disable-line
      // alert(JSON.stringify(res))
    })
    wx.ready(function () { //eslint-disable-line
      wx.onMenuShareTimeline(shareObj) //eslint-disable-line
      wx.onMenuShareAppMessage(shareObj) //eslint-disable-line
      wx.onMenuShareQQ(shareObj)//eslint-disable-line
      wx.onMenuShareWeibo(shareObj)//eslint-disable-line
      wx.onMenuShareQZone(shareObj)//eslint-disable-line
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
          wx.config({//eslint-disable-line
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
        val = `${location.protocol}${U_TRACK}?` + [`action=${val}`, `_token=${common.token}`, `_=${+new Date()}`].join('&')
      }
      html.push(`<input type="hidden" id="${key}" value="${val}">`)
    }
    shareSet.innerHTML = html.join('')
  },
  get config () {
    return this._config
  },
  set config (config) {
    this.initData(config)
  }
}
