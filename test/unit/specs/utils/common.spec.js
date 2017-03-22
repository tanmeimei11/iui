import common from 'i-ui/src/utils/common'
describe('common.js', function () {
  let stub1, stub2  
  let iosUri, iosRs 
  let androidUri, androidRs 

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

  beforeEach(function () {
    iosUri = 'https://www.in66.com_ios'
    androidUri = 'https://www.in66.com_android'
    iosRs = `in://webview?url=${encodeURIComponent(iosUri)}`
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
          expect(common.appUri(iosUri, androidUri)).to.equal(iosRs)
        })
      platform('android', function () {
          expect(common.appUri(iosUri, androidUri)).to.equal(androidRs)
        })
      platform('android', function () {
          expect(common.appUri(iosUri)).to.equal(iosRs)
        })
    })

    it('appUri appUrlObj', () => {
      platform('ios', function () {
          window.appUrlObj = { 'iosMessage': iosUri, 'androidMessage': androidUri }
          expect(common.appUri()).to.equal(iosRs)
        }) 
      platform('android', function () {
          window.appUrlObj = { 'iosMessage': iosUri, 'androidMessage': androidUri }
          expect(common.appUri()).to.equal(androidRs)
        }) 
    })

    it('appUri params/appUrlObj', () => {
      platform('ios', function () {
          window.appUrlObj = { 'iosMessage': '123', 'androidMessage': '456' }
          expect(common.appUri(iosUri)).to.equal(iosRs)
        }) 
      platform('android', function () {
          window.appUrlObj = { 'iosMessage': '123', 'androidMessage': '456' }
          expect(common.appUri(iosUri, androidUri)).to.equal(androidRs)
        }) 
    })
  })
})
