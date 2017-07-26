import DirectiveProtocol from './DirectiveProtocol'

class Tag extends DirectiveProtocol {
  static directiveKey = `__IUI_TAG_PROTOCOL_HANDLE__`
  static directiveName = `iLinkTag`

  constructor (params) {
    if (typeof(params) === 'string') {
      params = {tagId: params}
    }
    params['tagid'] = params['tagId']

    if (params[`cuid`] === undefined) {
      params[`cuid`] = '1XBxjgXw'
    }
    super(params)
    this._scheme = 'in://tag'
    this._href = '//h5.in66.com/inpromo/inweb/tag-share/index.html'
  }
}

export default Tag.directive(Tag)
