import common from 'i-ui/src/utils/common'
describe('common.js', function () {
  let stub1, stub2, ver
  let iosUri, iosRs, iosRs1, androidUri, androidRs1, androidRs, appUrlObj 

  let platform = function (platform, cb) {
    if (!cb) return
    if (platform == 'ios') {
      stub1 = sinon.stub(common, 'isIos', { get: () => true })
      stub2 = sinon.stub(common, 'isAndroid', { get: () => false })
    } else {
      stub1 = sinon.stub(common, 'isIos', { get: () => false })
      stub2 = sinon.stub(common, 'isAndroid', { get: () => true })
    }
    cb()
    stub1.restore()
    stub2.restore()
  }

  let loacalVersion = function (version, cb) {
    if (!cb) return
    ver = sinon.stub(common, 'version', { get: () => version })
    cb()
    ver.restore()
  }

  beforeEach(function () {
    iosUri = 'https://www.in66.com_ios'
    androidUri = 'https://www.in66.com_android'

    appUrlObj = {ios: iosUri, android: androidUri}

    iosRs1 = `in://webview?url=${encodeURIComponent(iosUri)}`
    iosRs = `in://webview?url=${encodeURIComponent(encodeURIComponent(iosUri))}`
    androidRs1 = `in://webview?url=${encodeURIComponent(encodeURIComponent(androidUri))}`
    androidRs = `in://webview?url=${encodeURIComponent(androidUri)}`
  })
  afterEach(function () {})

  describe('appUri', function () {
    it('appUri throw Error', () => {
          // window.appUrlObj = undefined
          // expect(common.appUri).to.throw(Error, /Please input uri/)
    })

    it('appUri params', () => {
      platform('ios', function () {
        expect(common.appUri(appUrlObj)).to.equal(iosRs)
      })
      platform('android', function () {
        expect(common.appUri(appUrlObj)).to.equal(androidRs)
      })
      platform('android', function () {
        expect(common.appUri(iosUri)).to.equal(iosRs1)
      })
    })

    it('appUri appUrlObj', () => {
      platform('ios', function () {
        window.appUrlObj = appUrlObj 
        expect(common.appUri()).to.equal(iosRs)
      }) 
      platform('android', function () {
        window.appUrlObj = appUrlObj 
        expect(common.appUri()).to.equal(androidRs)
      }) 
      platform('android', function () {
        window.appUrlObj = iosUri 
        expect(common.appUri()).to.equal(iosRs1)
      })
    })

    it('appUri params/appUrlObj', () => {
      platform('ios', function () {
        window.appUrlObj = appUrlObj 
        expect(common.appUri({ios: androidUri, android: iosUri})).to.equal(androidRs1)
      }) 
      platform('android', function () {
        window.appUrlObj = appUrlObj 
        expect(common.appUri({ios: androidUri, android: iosUri})).to.equal(iosRs1)
      }) 
    })

    it('appUri scheme', () => {
      if (!appUrlObj.scheme) appUrlObj.scheme = false 
      platform('ios', function () {
        expect(common.appUri(appUrlObj)).to.equal(appUrlObj.ios)
      }) 
      platform('android', function () {
        expect(common.appUri(appUrlObj)).to.equal(appUrlObj.android)
      }) 
    })
  })
  describe('lessThanVer', function () {
    it('lessThanVer params', () => {
      loacalVersion('3.0.0', function () {
        expect(common.lessThanVer('2.0.0')).to.be.equal(false)
      })
      loacalVersion('1.0.0', function () {
        expect(common.lessThanVer('2.0.0')).to.be.equal(true)
      })
    })
  })
})
