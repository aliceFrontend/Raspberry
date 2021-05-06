<template>
  <div class="wrapper">
    <div class="home__title">
      Raspberry
    </div>
    <div class="home__body"> 
      <!-- <AppFeedToggler/> -->
      <AppFeed :api-url="apiUrl"/>
      <AppPopularTags/>
    </div>
  </div>
</template>

<script>
import AppFeed from '@/components/Feed'
import AppPopularTags from '@/components/PopularTags'
// import AppFeedToggler from '@/components/FeedToggler'
export default({
    name: 'AppYourFeed',
    components:{ 
        AppFeed, 
        AppPopularTags,
        // AppFeedToggler
    },
    data(){
        return{
             apiUrl: '/articles/feed'
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
.home__body{
  display: flex;
  width: 95%;
  justify-content: center;
  margin: 0 auto;
  padding: 0 30px 0 20px;
  max-width: 1600px;
}

</style>