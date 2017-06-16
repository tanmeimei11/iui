import awake from '../utils/jsBridge'
import icommon from '../utils/common'
/**
 * 打开in记
 */
export const diary = {
  methods: {
    diaryOpen (author, refresh = false) {
      if (icommon.InApp) {
        awake(`in://diary/other?userid=${author}${refresh ? '&refresh=1' : ''}`)
      } else {
        location.href = `${location.protocol}//h5.in66.com/inpromo/inweb/in-share/in.html?uid=${author}`
      }
    }
  }
}
/**
 * 打开话题
 */
export const tag = {
  methods: {
    tagOpen (tagid, refresh = false) {
      if (icommon.InApp) {
        awake(`in://tag?tagid=${tagid}${refresh ? '&refresh=1' : ''}`)
      } else {
        location.href = `${location.protocol}//h5.in66.com/inpromo/inweb/tag-share/index.html?tgid=${tagid}`
      }
    }
  }
}
/**
 * 打开照片详情页面
 */
export const photo = {
  methods: {
    photoOpen (photoId, refresh = false) {
      if (icommon.InApp) {
        awake(`in://photodetail?pid=${photoId}${refresh ? '&refresh=1' : ''}`)
      } else {
        location.href = `${location.protocol}//h5.in66.com/inpromo/inweb/in-share/share.html?pid=${photoId}`
      }
    }
  }
}
/**
 * 打开直播
 */
export const live = {
  methods: {
    liveOpen (liveId, refresh = false) {
      if (icommon.InApp) {
        awake(`in://live/audience?liveid=${liveId}${refresh ? '&refresh=1' : ''}`)
      } else {
        location.href = `${location.protocol}//www.in66.com/intv/${liveId}`
      }
    }
  }
}
