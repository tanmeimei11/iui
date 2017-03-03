import About from './views/About.vue'
import iAudio from './views/iAudio.vue'
import iAvatar from './views/iAvatar.vue'
import iRollBar from './views/iRollBar.vue'
import iBarrage from './views/iBarrage.vue'
import iImgUpload from './views/iImgUpload.vue'
import iTrack from './views/iTrack.vue'
import changeLog from './views/changeLog.vue'

// https://material.io/icons/
// https://ccforward.github.io/rubik/#/

export const routes = [{ name: 'home', path: '/', component: About },
    {name: 'about', path: '/about', component: About},
    {name: 'changeLog', path: '/changeLog', component: changeLog},
    {name: 'iAudio', path: '/iAudio', component: iAudio, type: 'components', icon: 'music_note', txt: '音乐自动播放'},
    {name: 'iAvatar', path: '/iAvatar', component: iAvatar, type: 'components', icon: 'face', txt: '头像'},
    {name: 'iRollBar', path: '/iRollBar', component: iRollBar, type: 'components', icon: 'more_vert', txt: '滚动加载'},
    {name: 'iBarrage', path: '/iBarrage', component: iBarrage, type: 'components', icon: 'subtitles', txt: '弹幕滚动'},
    {name: 'iImgUpload', path: '/iImgUpload', component: iImgUpload, type: 'components', icon: 'file_upload', txt: '上传图片'},
    {name: 'iTrack', path: '/iTrack', component: iTrack, type: 'directives', icon: 'leak_add', txt: '埋点'}
]
