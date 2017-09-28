// inject common
window.lib = window.lib || {
  flexible: {
    dpr: 1,
    rem: 37.5,
    px2rem: function(){ val / window.lib.flexible.rem},
    rem2px: function(){ val * window.lib.flexible.rem},
    refreshRem: function(){}
  }
}
