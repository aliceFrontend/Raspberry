<template>
    <div class="post__wrap">
        <div class="item-home__image">
          <img :src="require(`./../assets/images/${post.post_image}.jpg`)" alt="">
        </div>
        <div class="item-home__content">
           <div class="item-home__data">{{post.post_data}}</div>
           <div class="item-home__title">{{post.post_title}}</div>
           <div class="item-home__subtitle">{{post.post_text}}</div>
        </div>
    </div>
</template>

<style >

.item-home__content{
  padding: 30px 20px 40px 0px;
}
.item-home__image{
  position: relative;
  padding: 61% 0 0 0;
}
.item-home__image img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
}
.item-home__data{
  font: normal 14px/14px 'Poppins', sans-serif;
  color: #000000;
  opacity: 0.5;
  margin-bottom: 16px;
}
.item-home__title{
    font: 500 28px/34px 'Poppins', sans-serif;
    letter-spacing: 0px;
    color: #121212;
    margin-bottom: 16px;
}
.item-home__subtitle{
  font: 200 15px/25px 'Poppins', sans-serif;
  color: #323947;
}
</style>


<script>

export default({
  name: 'Post',
  props:{
    post: Object
  },
  
})
</script>

