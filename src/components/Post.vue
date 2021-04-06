<template>
    <div class="post__wrap">
        <div class="item-home__image">
          <img :src="require(`./../assets/images/${post.image}.jpg`)" alt="">
        </div>
        <div class="item-home__content">
           <div class="item-home__data">{{post.data}}</div>
           <div class="item-home__title">{{post.title}}</div>
           <div class="item-home__subtitle">{{post.subtitle}}</div>
        </div>
    </div>
</template>

<style >
/* //yandex.ru/images/картинка   import картинка1, сделать заглушки картинками d gjcnt bvgjhnbhjdfnm rfhnbyre? перед экспортом, испорт, src */
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
// import thumb_article8 from './assets/images/thumb_article.jpg';
export default({
  name: 'Post',
  props: ['post'],
  // components: {thumb_article8},
  
})
</script>

