<template>
  <article>
    <i-button type="primary" v-iLinkTag="{tagId: '1NYABArKQ', cuid: '74026136'}">tag页</i-button>
    <i-button type="primary" v-iLinkUser="{userId: '74026136', otherParam: 'otherParam'}">in记</i-button>
    <i-button type="primary" v-iLinkPost="{postId: '1PMovPwz'}">图片视频详情</i-button>
    <i-button type="primary" v-iLinkStory="{storyId: '1MqbGZP', uid: '74026136'}">故事集详情</i-button>
    <i-button type="primary" v-iLinkLive="{liveId: '1jPxPBV'}">直播详情</i-button>
    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>参数（可选）</th>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>打开链接或协议</td>
          <td>String</td>
          <td>1. href (链接)<br />2. protocol（协议）<br />3 为空时，in内跳协议,in外跳到链接 </td>
        </tr>
      </tbody>
    </table>

  </article>
</template>

<script>
  import { iLinkTag } from 'i-ui/src/protocols/Tag'
  import { iLinkUser } from 'i-ui/src/protocols/User'
  import { iLinkPost } from 'i-ui/src/protocols/Post'
  import { iLinkStory } from 'i-ui/src/protocols/Story'
  import { iLinkLive } from 'i-ui/src/protocols/Live'

  export default {
    directives: { 
      iLinkTag,
      iLinkUser,
      iLinkPost,
      iLinkStory,
      iLinkLive
    },
    name: 'i-Link'
  }
</script>

``` html
  <i-button type="primary" v-iLinkTag="`1NYABArKQ`">tag页</i-button>
  <i-button type="primary" v-iLinkTag.href="{tagid: '1NYABArKQ'}">tag页</i-button>
  <i-button type="primary" v-iLinkTag.protocol="{tagid: '1NYABArKQ', otherParam: 'otherParam'}">tag页</i-button>
```

``` html
  <i-button type="primary" v-iLinkUser="`74026136`}">in记</i-button>
  <i-button type="primary" v-iLinkUser="{userid: '74026136'}">in记</i-button>
```

``` html
  <i-button type="primary" v-iLinkPost="`1PMovPwz`}">图片视频详情</i-button>
  <i-button type="primary" v-iLinkPost="{pid: '1PMovPwz'}">图片视频详情</i-button>
```

``` html
  <i-button type="primary" v-iLinkStory="`1MqbGZP`">故事集详情</i-button>
  <i-button type="primary" v-iLinkStory="{storyId: '1MqbGZP', uid: '74026136'}">故事集详情</i-button>
```

``` html
  <i-button type="primary" v-iLinkLive="`1jPxPBV`">直播详情</i-button>
  <i-button type="primary" v-iLinkLive="{liveid: '1jPxPBV'}">直播详情</i-button>
```

``` html
<script>
  import { iLinkTag } from 'i-ui/src/protocols/Tag'
  import { iLinkUser } from 'i-ui/src/protocols/User'
  import { iLinkPost } from 'i-ui/src/protocols/Post'
  import { iLinkStory } from 'i-ui/src/protocols/Story'
  import { iLinkLive } from 'i-ui/src/protocols/Live'

  export default {
    directives: { 
      iLinkTag,
      iLinkUser,
      iLinkPost,
      iLinkStory,
      iLinkLive
    },
    name: 'i-Link'
  }
</script>
```
