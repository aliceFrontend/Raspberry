<template>
<div class="home__posts"> 
    <AppLoading v-if="isLoading"/>
    <AppErrorMessage v-if="error"/> 

    <div class="feed" v-if="feed">
        <div class="posts__wrap">
            <div class="post" v-for="(article, index) in feed.articles" :key="index">
                <div class="post__wrap">
                    <div class="item-post__image">
                    <!-- <img :src="require(`./../assets/images/${post.post_image}.jpg`)" alt=""> -->
                        <!-- <img src="./../assets/images/thumb_article1.jpg" alt=""> -->
                        <img :src="article.image" alt=""/>

                        <!-- <div class="item-home__isFavorite">
                            <img src="./../assets/images/like.svg" alt="">
                        </div> -->
                    </div>

                    <div class="item-post__content">
                        <router-link :to="{name: 'article', params: {slug: article.slug}}">
                            <div class="item-post__data">{{ article.createdAt }}</div>
                            <div class="item-post__title">{{ article.title }}</div>
                            <div class="item-post__subtitle">{{ article.description }}</div>
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
import {stringify, parseUrl} from 'query-string'

import {actionTypes} from '@/store/modules/feed'
import AppPagination from '@/components/Pagination'
import {limit} from '@/helpers/vars'
import AppLoading from '@/components/Loading'
import AppErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'AppFeed',
  components: {
    AppPagination,
    AppLoading,
    AppErrorMessage
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feed: state => state.feed.data,
      error: state => state.feed.error
    }),
    limit() {
      return limit
    },
    baseUrl() {
      return this.$route.path
    },
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    offset() {
      return this.currentPage * limit - limit
    }
  },
  watch: {
    currentPage() {
      this.fetchFeed()
    },
    baseUrl() {
      this.fetchFeed()
    },
    apiUrl() {
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
.item-post__content {
  padding: 30px 20px 40px 0px;
}
.item-post__image {
  position: relative;
  padding: 61% 0 0 0;
}
.item-post__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
}
.item-post__data {
  font: normal 14px/14px 'Poppins', sans-serif;
  color: #000000;
  opacity: 0.5;
  margin-bottom: 16px;
}
.item-post__title {
  font: 500 28px/34px 'Poppins', sans-serif;
  letter-spacing: 0px;
  color: #121212;
  margin-bottom: 16px;
}
.item-post__subtitle {
  font: 200 15px/25px 'Poppins', sans-serif;
  color: #323947;
}
.posts__wrap{
  display: flex;
  flex-wrap: wrap;
}
.post{
  flex: 1 1 calc(100%/3 - 30px);
  margin: 0 15px 0 15px;
  box-sizing: border-box;
  min-width: 335px;
  max-width: 340px; 
}
.home__posts{
  width: 73%;
}
</style>
