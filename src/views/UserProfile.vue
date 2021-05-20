<template>
  <div class="userProfile" v-if="userProfile">
    <div class="userProfile__info">
      <div class="userProfile__icon"></div>
      <div class="userProfile__title">{{ userProfile.username}}</div>
      <div class="userProfile__about">{{ userProfile.bio }}</div>
      <!-- FOLLOW USER BUTTON -->
      <router-link v-if="isCurrentUserProfile" class="userProfile__edit" :to="{name: 'settings'}">
        Edit Profile Settings
      </router-link>
    </div>
    <div class="userProfile__switch">
      <ul class="userProfile__list">
        <li>
          <router-link :to="{ name: 'userProfile', params: {slug: userProfile.username}}" :class="{active: routeName === 'userProfile'}">
            My Posts
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'userProfileFavorites', params: {slug: userProfile.username} }" :class="{active: routeName === 'userProfileFavorites'}">
            Favorites Posts
          </router-link>
          </li>
      </ul>
    </div>
    <mcv-feed-toggler></mcv-feed-toggler>
    <mcv-feed :api-url="apiUrl"></mcv-feed>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'

import {actionTypes as userProfileActionTypes} from '@/store/modules/userProfile'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'
import McvFeed from '@/components/Feed'
import McvFeedToggler from '@/components/FeedToggler'

export default {
  name: 'McvUserProfile',
  components: {
    McvFeed,
    McvFeedToggler
  },
  computed: {
    ...mapState({
      isLoading: state => state.userProfile.isLoading,
      userProfile: state => state.userProfile.data,
      error: state => state.userProfile.error
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    isCurrentUserProfile() {
      if (!this.currentUser || !this.userProfile) {
        return false
      }

      return this.currentUser.username === this.userProfile.username
    },
    userProfileSlug() {
      return this.$route.params.slug
    },
    apiUrl() {
      const isFavorites = this.$route.path.includes('favorites')
      return isFavorites
        ? `/articles?favorited=${this.userProfileSlug}`
        : `/articles?author=${this.userProfileSlug}`
    },
    routeName() {
      return this.$route.name
    }
  },
  watch: {
    userProfileSlug() {
      this.getUserProfile()
    }
  },
  mounted() {
    this.getUserProfile()
  },
  methods: {
    getUserProfile() {
      this.$store.dispatch(userProfileActionTypes.getUserProfile, {
        slug: this.userProfileSlug
      })
    }
  }
}
</script>
<style>
.userProfile__info{
  padding: 30px 50px 30px 50px;
  margin: 0 auto 30px auto;
  max-width: 1000px;
}
.userProfile__icon{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background: -webkit-linear-gradient(left top, rgb(216,15,233) 0%, rgb( 242 ,36 ,23) 100%);
  transition: all 0.4s ease-in-out;
  border-radius: 50%;
  margin-bottom: 20px;
}
.userProfile__title{
  text-align: center;
  font: 500 28px/34px 'Poppins', sans-serif;
  letter-spacing: 0px;
  color: #121212;
  margin: 0 0 15px 0;
  /* max-width: 1000px; */
}
.home__posts{
  width: 100%;
}
.posts__wrap{
  justify-content: center;
}
.userProfile__edit{
  padding: 13px 35.5px 12px 35.5px;
  border: 1px solid #B85C5C;
  border-radius: 5px;
  background-color: transparent;
  color: #B85C5C;
  font: 500 15px/20px 'IBM Plex Sans';
  transition: all .3s;
  margin: 0 auto;
  display: block;
  text-align: center;
  width: 25%;
}
.userProfile__edit:hover{
  background-color:#B85C5C;
  color: #fff;
}
.userProfile__about{
  font: 200 20px/35px 'Poppins', sans-serif;
  letter-spacing: 0.3px;
  color: #323947;
  margin: 0 0 30px 0;
  /* max-width: 800px; */
}
.userProfile__switch{
  padding: 0 30px 0 30px;
  margin: 0 0 30px 0;
}
.userProfile__list{
  display: flex;
  align-items: center;
  justify-content: center;
}
.userProfile__list li{
  margin: 0 40px 0 0;
  font: 500 35px/41px 'Poppins', sans-serif;
  letter-spacing: 0px;
  color: #121212;
  transition: 0.3s;
}
.userProfile__list li:hover{
  color: #6a56f5;
  cursor: pointer;
}
</style>