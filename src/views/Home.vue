<template>
  <div class="wrapper">
    <div class="home__title">
      The Blog
    </div>
    <div class="home__posts"> 
      <a class="home__post" v-for="post in posts" :key="post.id" href="#">
        <Post :post="post"></Post>
      </a>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post';

export default {
 components: {Post},
 name: 'PostView',
 data(){
    return {
      posts: [
        {id: 1, image: 'thumb_article8',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive '},
        {id: 2, image: 'thumb_article1',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'},
        {id: 3, image: 'thumb_article3',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'},
        {id: 4, image: 'thumb_article7',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'},
       {id: 5, image: 'thumb_article8',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive '},
        {id: 6, image: 'thumb_article1',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'},
        {id: 7, image: 'thumb_article3',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'},
        {id: 8, image: 'thumb_article7',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'},
        {id: 9, image: 'thumb_article3',
        data: 'Maret 15, 2021', title: 'Tentang membuat design responsive', 
        subtitle: 'Beberapa best practices dari website<br> website yang bisa diterapkan saat<br> membuat design versi responsive'},  
      ]
    }
  }
}
</script>
<style>
body{
  background-color: #E3E6EC;
  background-image: url('./../assets/images/bgcircle.svg');
  background-repeat: no-repeat;
  background-position: top center;
}
.home__title{
  padding: 88px 200px 88px 200px;
  text-align: start;
  font: 600 140px/150px 'Poppins', sans-serif;
}
.home__posts{
  padding: 0 30px 0 30px;  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  
}
.home__post{
  flex: 1 1 calc(100%/3 - 30px);
  margin: 0 23px 0 23px;
  box-sizing: border-box;
  min-width: 335px;
  max-width: 340px; 
}
@media(max-width: 2560px ){}
@media(max-width: 2253px){}
@media(max-width: 1920px){}
@media(max-width: 1700px){}
@media(max-width: 1520px){}
@media(max-width: 1440px){}
@media(max-width: 1150px){}
@media(max-width: 1024px){}
@media(max-width: 1000px){}
@media(max-width: 768px){}
@media(max-width: 660px){}
@media(max-width: 425px){}
@media(max-width: 375px){}
@media(max-width: 300px){}
</style>

