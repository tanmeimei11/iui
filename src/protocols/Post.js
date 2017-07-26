import DirectiveProtocol from './DirectiveProtocol'

class Post extends DirectiveProtocol {
  static directiveKey = `__IUI_POST_PROTOCOL_HANDLE__`
  static directiveName = `iLinkPost`

  constructor (params) {
    if (typeof(params) === 'string') {
      params = {postId: params}
    }
    params['pid'] = params['postId']

    super(params)
    this._scheme = 'in://photodetail'
    this._href = '//h5.in66.com/inpromo/inweb/in-share/share.html'
  }
}

export default Post.directive(Post)
