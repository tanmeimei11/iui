// inject common
window.lib = window.lib || {
  flexible: {
    dpr: 1,
    rem: 37.5,
    px2rem: val => val / window.lib.flexible.rem,
    rem2px: val => val * window.lib.flexible.rem,
    refreshRem: () => {}
  }
}
