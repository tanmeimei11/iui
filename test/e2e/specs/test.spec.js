module.exports = {
  'Demo test triumph': function (browser) {
    browser
      .url('http://h5.in66.com/inpromo/2017/pr-triumph/writeoff.html')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=number]', '1876832240')
      .pause(1000)
      .assert.containsText('.info', '黛安芬专柜领取')
      .end()
  }
}
