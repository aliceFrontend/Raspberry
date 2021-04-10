<template>
  <div class="wrapper">
    <div class="home__title">
      The Blog
    </div>
    <div class="home__posts"> 
      <a class="home__post" v-for="post in allPosts" :key="post.id" href="#" :posts="posts" >
        <Post :post="post"></Post>
      </a>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post';
import {mapGetters} from 'vuex';
export default {
 data(){
  return{
    posts:[]
  }
 },
 components: {Post},
 name: 'PostView',
//  computed:{
//     allPosts(){
//      return this.$store.getters.allPosts;
//    }
//  }
computed: mapGetters(['allPosts'])
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
@media(max-width: 768px){
  .home__title{
  padding: 68px 50px 68px 50px;
  text-align: center;
  font: 600 100px/110px 'Poppins', sans-serif;
  }
}
@media(max-width: 660px){}
@media(max-width: 425px){}
@media(max-width: 375px){}
@media(max-width: 300px){}
</style>

