import common from './common'
import { TRACK_URL } from 'iConfig'
export default function track (seed, query = []) {
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

