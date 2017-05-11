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
    `_ig=${common.query._ig || common.query.ig}`,
    `_=${+new Date()}`
  ]).join('&')
}

export function trackParam (search) {
  let items = []
  if (!search.length) return true
  let [seed, query] = search.split('?')
  if (query && query.length) {
    items = query.split('&')
  }
  track(seed, items)
}
