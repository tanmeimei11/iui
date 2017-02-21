import About from './views/About.vue'
import iAudio from './views/iAudio.vue'
import iAvatar from './views/iAvatar.vue'
import iTrack from './views/iTrack.vue'
import changeLog from './views/changeLog.vue'

// https://material.io/icons/

export const routes = [{ name: 'home', path: '/', component: About },
    {name: 'about', path: '/about', component: About},
    {name: 'changeLog', path: '/changeLog', component: changeLog},
    {name: 'iAudio', path: '/iAudio', component: iAudio, type: 'components', icon: 'add_alert', txt: '音乐自动播放'},
    {name: 'iAvatar', path: '/iAvatar', component: iAvatar, type: 'components', icon: 'account_box', txt: '头像'},
    {name: 'iTrack', path: '/iTrack', component: iTrack, type: 'directives', icon: 'leak_add', txt: '埋点'}
]
