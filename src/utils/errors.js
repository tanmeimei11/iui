export class AppUrlObjError extends Error {
  constructor () { 
    super(`
      appUrlObj should be one of these below:\n   
      1. https://www.in66.com\n
      2. { ios: 'https://www.in66.com', android: 'https://www.in66.com' }`)
  }
}

export class BgimgError extends Error {
  constructor () { 
    super(`
      iBgimg Size should be one of these below:\n   
      1. contain\n
      2. cover`)
  }
}
