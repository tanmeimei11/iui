export class AppUrlObjError extends Error {
  constructor(){ 
    super(`
      appUrlObj should be one of these below:\n   
      1. https://www.in66.com\n
      2. { iso: 'https://www.in66.com', android: 'https://www.in66.com' }`)
  }
}
