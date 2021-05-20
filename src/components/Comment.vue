<template>
    <div class="comments" v-if="comment">
        <div class="comments__item" v-for="(comment, index) in comment.comments" :key="index">
            <textarea name="" id="" cols="10" rows="7" placeholder="Write a comment...">...</textarea>
            <button class="comments__btn" type="submit" :disabled="isSubmitting" @click="Click">Post Comment</button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes as commentActionTypes} from '@/store/modules/comment'
export default{
    name: 'AppComment',
    props:{
      apiUrl: {
      type: String,
      required: true
      }
    },
    mounted(){
    this.$store.dispatch(commentActionTypes.getComment, {
        slug: this.$route.params.slug
    })
    },
    computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      components: state => state.components.data,
      error: state => state.feed.error
    })
    },
    methods:{
        Click(){
            console.log('hi')
        }
    }
}
</script>

<style>
.comments{
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
}
.comments__item{
   margin: 0 0 10px 0;
}
.comments__item textarea{
    width: 100%;
    padding: 0 0px 0 15px;
    border: none;
    border-radius: 5px;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
    margin: 0 0 30px 0;
}
.comments__item textarea::placeholder{
    font: 500 18px/23px 'IBM Plex Sans';
    padding: 20px 0 0 0;
}
.comments__btn{
    padding: 18px 40.5px 17px 40.5px;
    border-radius: 5px;
    background-color: #9181FF;
    color: #fff;
    font: 500 18px/23px 'IBM Plex Sans';
    transition: all .3s;
    display: block;
    margin: 0 auto;
}
.comments__btn:hover{
    background-color: #7f6dfc;
}
</style>