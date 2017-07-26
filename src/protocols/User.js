import DirectiveProtocol from './DirectiveProtocol'

class User extends DirectiveProtocol {
  static directiveKey = `__IUI_USERPROTOCOL_HANDLE__`
  static directiveName = `iLinkUser`

  constructor (params) {
    if (typeof(params) === 'string') {
      params = {userId: params}
    }
    params['uid'] = params['userid'] = params['userId']

    super(params)
    this._scheme = 'in://diary/other'
    this._href = '//h5.in66.com/inpromo/inweb/in-share/in.html'
  }
}

export default User.directive(User)
