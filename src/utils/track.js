import common from './common'
import { U_TRACK } from 'iConfig'
export default function track (seed, query = []) {
  let img = new Image()
  query.push(`action=${seed}`)
  img.src = `${location.protocol}${U_TRACK}?` + query.concat([
    `_host=${location.host}`,
    `_token=${common.token}`,
    `_s=${common.source}`,
    `_v=${common.version}`,
    `_=${+new Date()}`
  ]).join('&')
}

