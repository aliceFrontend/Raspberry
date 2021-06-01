<template>
  <div class="like">
    <div class="like__title">Did you like the article?</div>
    <div class="like__info">
      <button class="like__btn"  @click="handleLike" :class="{ btn: true, 'btn-sm': true, 'btn-primary': isFavoritedOptimistic, 'btn-outline-primary': !isFavoritedOptimistic }">
        <div class="like__count">{{ favoritesCountOptimistic }}</div>
          <img class="like__image" src="./../assets/images/clap.svg" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/addToFavorites'
export default {
  name: 'AppAddToFavorites',
  props: {
    isFavorited: {
      type: Boolean,
      required: true
    },
    articleSlug: {
      type: String,
      required: true
    },
    favoritesCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isFavoritedOptimistic: this.isFavorited,
      favoritesCountOptimistic: this.favoritesCount
    }
  },
  methods: {
    handleLike() {
      this.$store.dispatch(actionTypes.addToFavorites, {
        slug: this.articleSlug,
        isFavorited: this.isFavoritedOptimistic
      })
      if (this.isFavoritedOptimistic) {
        this.favoritesCountOptimistic = this.favoritesCountOptimistic - 1
      } else {
        this.favoritesCountOptimistic = this.favoritesCountOptimistic + 1
      }
      this.isFavoritedOptimistic = !this.isFavoritedOptimistic
    }
  }
}
</script>
<style>
.like__title{
  text-align: center;
  font: 400 20px/35px 'Poppins', sans-serif;
  letter-spacing: 0.3px;
  color: #323947;
  margin: 0 0 15px 0;
}
.like__info{
  text-align: center;
}
.like__btn{
  background-color: #E3E6EC;
}
.like__image{
  width: 10%;
  border: 1px solid #FF4C5A;
  border-radius: 50%;
  padding: 10px;
  box-shadow:0;
  transition: 0.3s;
}
.like__image:hover{
-webkit-box-shadow: 0px 0px 20px 3px #FF4C5A;
-moz-box-shadow: 0px 0px 20px 3px #FF4C5A;
box-shadow: 0px 0px 20px 3px #FF4C5A;
}
.like__count{
 font: 400 22px/35px 'Poppins', sans-serif;
 letter-spacing: 0.3px; 
 color: #FF4C5A;
 margin: 0 0 5px 0;
}
</style>