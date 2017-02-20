import common from './common'
export default function track (seed, query = []) {
  const TRACK_URL = `//stats1.jiuyan.info/itugo_deleven.html`
  let img = new Image()
  query.push(`action=${seed}`)
  img.src = `${location.protocol}${TRACK_URL}?` + query.concat([
    `_host=${location.host}`,
    `_token=${common.token}`,
    `_s=${common.source}`,
    `_v=${common.version}`,
    `_=${+new Date()}`
  ]).join('&')
}

