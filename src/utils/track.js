import common from './common'
import {
  U_TRACK
} from 'iConfig'

export default function track (seed, query = []) {
  let img = new Image()
  img.src = combineQuery(seed, query)
}

export function combineQuery (seed, query = []) {
  let _track = window._track || []
  let _trackPrefix = window._trackPrefix || ''
  let _trackSuffix = window._trackSuffix || ''
  query.push(`action=${_trackPrefix}${seed}${_trackSuffix}`)
  query = query.concat(_track)
  return `${location.protocol}${U_TRACK}?` + query.concat([
    `_host=${location.host}`,
    `_token=${common.token}`,
    `_s=${common.source}`,
    `_v=${common.version}`,
    `_ig=${common.query._ig || common.query.ig}`,
    `_=${+new Date()}`
  ]).join('&')
}

export function trackParam (search, items = []) {
  if (!search.length) return true
  let [seed, query] = search.split('?')
  if (query && query.length) {
    items = items.concat(query.split('&'))
  }
  track(seed, items)
}
