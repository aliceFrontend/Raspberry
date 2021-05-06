<template>
  <div class="wrapper">
    <div class="home__title">
      Raspberry
    </div>
    <div class="home__posts"> 
    <AppFeed :api-url="apiUrl"/>
    <AppPopularTags/>
    </div>
    <!-- <div class="home__tags">
        <AppPopularTags/>
    </div> -->
  </div>
</template>

<script>
import AppFeed from '@/components/Feed'
import AppPopularTags from '@/components/PopularTags'
export default({
    name: 'app-globalFeed',
    components:{ 
        AppFeed, AppPopularTags
    },
    data(){
        return{
             apiUrl: '/articles'
        }
    }
})
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
/* .home__posts{
  display: flex;
} */
</style>