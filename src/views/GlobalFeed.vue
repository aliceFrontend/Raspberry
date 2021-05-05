<template>
  <div class="wrapper">
    <div class="home__title">
      Raspberry
    </div>
    <div class="home__posts"> 
    <feed :api-url="apiUrl"/>
    </div>
    <!-- <div class="home__tags">
        POPULAR TAGS
    </div> -->
  </div>
</template>

<script>
import Feed from '@/components/Feed'
export default({
    name: 'app-globalFeed',
    components:{ 
        Feed
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
</style>