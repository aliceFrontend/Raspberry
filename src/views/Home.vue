<template>
  <div class="wrapper">
    <div class="home__title">
      <p>The Blog</p>
    </div>
    <div class="home__row">
      <div class="home__column" v-for="post in posts" :key="post.id">
        <!-- <Post :post="post"></Post> -->
        <div class="item-home__image">
          <img src="./../assets/images/thumb_article8.jpg" alt="">
        </div>
        <div class="item-home__content">
           <div class="item-home__data">{{post.data}}</div>
           <div class="item-home__title">{{post.title}}</div>
           <div class="item-home__subtitle">{{post.subtitle}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body{
  background-color: #E3E6EC;
  /* background-image: url('./../assets/images/bgcircle.svg'); */
  background-repeat: no-repeat;
  background-position: top center;
}
.home__title{
  padding: 88px 200px 88px 200px;
}
.home__title p{
  text-align: start;
  font: 600 140px/150px 'Poppins', sans-serif;
  /* text-transform: uppercase; */
}
.home__row{
  padding: 0 212px 0 212px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home__column{
  margin: 0 45px 0 0;
  max-width: 330px;
}
.home__column:nth-child(3){
  margin: 0;
}
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
  /* height: 100%;  */
  border-radius: 16px;
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
// import Post from '@/components/Post';name: 'Post',
//  components: {Post},

export default {
 
 data(){
    return {
      posts: [
        {id: 1, image: './../assets/images/thumb_article8.jpg',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'},
        {id: 2, image: './../assets/images/thumb_article8.jpg',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'},
        {id: 3, image: './../assets/images/thumb_article8.jpg',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'}
      ]
    }
  }
}
</script>