<template>
<div class="home__block"> 
    <div class="home__loading" v-if="isLoading">Loading...</div>
    <div class="home__error" v-if="error">Something bad happed</div> 

    <div class="feed" v-if="feed">
        <div class="home__wrap">
            <div class="home__post" v-for="(article, index) in feed.articles" :key="index">
                <div class="post__wrap">
                    <div class="item-home__image">
                    <!-- <img :src="require(`./../assets/images/${post.post_image}.jpg`)" alt=""> -->
                        <img src="./../assets/images/thumb_article1.jpg" alt="">

                        <!-- <div class="item-home__isFavorite">
                            <img src="./../assets/images/like.svg" alt="">
                        </div> -->
                    </div>

                    <div class="item-home__content">
                        <router-link :to="{name: 'article', params: {slug: article.slug}}">
                            <div class="item-home__data">{{ article.createdAt }}</div>
                            <div class="item-home__title">{{ article.title }}</div>
                            <div class="item-home__subtitle">{{ article.description }}</div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <AppPagination :total="feed.articlesCount" :limit="limit" :current-page="currentPage" :url="baseUrl"/>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/feed'
import AppPagination from '@/components/Pagination'
import {limit} from '@/helpers/vars'
import {stringify, parseUrl} from 'query-string'

export default {
  name: 'AppFeed',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  components: {
    AppPagination
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feed: state => state.feed.data,
      error: state => state.feed.error
    }), 
    limit(){
      return limit
    },
     currentPage(){
       return Number(this.$route.query.page || '1')
     },
     baseUrl(){
       return this.$route.path
     },
     offset(){
       return this.currentPage * limit - limit  
     }
  },
  watch: {
    currentPage(){
    this.fetchFeed()
    }
  },
  mounted() {
    this.fetchFeed()
  },
  methods: {
    fetchFeed() {
      const parsedUrl = parseUrl(this.apiUrl)
      const stringifiedParams = stringify({
        limit,
        offset: this.offset,
        ...parsedUrl.query
      })
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
      this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams})
    }
  } 

}
</script>

<style>
.item-home__content {
  padding: 30px 20px 40px 0px;
}
.item-home__image {
  position: relative;
  padding: 61% 0 0 0;
}
.item-home__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
}
.item-home__data {
  font: normal 14px/14px 'Poppins', sans-serif;
  color: #000000;
  opacity: 0.5;
  margin-bottom: 16px;
}
.item-home__title {
  font: 500 28px/34px 'Poppins', sans-serif;
  letter-spacing: 0px;
  color: #121212;
  margin-bottom: 16px;
}
.item-home__subtitle {
  font: 200 15px/25px 'Poppins', sans-serif;
  color: #323947;
}
.home__wrap{
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
.home__loading{
    padding: 88px 200px 88px 200px;
    text-align: center;
    font: 600 100px/110px 'Poppins', sans-serif;
}
/* .item-home__isFavorite{
    position: relative;
}
.item-home__isFavorite img{
    width: 7%;
    position: absolute;
    top: -190px;
    left: 300px;
} */
</style>
