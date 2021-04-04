<template>
    <div class="post__wrap">
        <div class="item-home__image">
          <img src="./../assets/images/thumb_article8.jpg" alt="">
        </div>
        <div class="item-home__content">
           <div class="item-home__data">{{post.data}}</div>
           <div class="item-home__title">{{post.title}}</div>
           <div class="item-home__subtitle">{{post.subtitle}}</div>
        </div>
    </div>
</template>

<script>

export default({
  name: 'Post',
  props: ['post'],
  
})
</script>

