<template>
    <div class="comments__wrap">
        <AppLoading v-if="isLoading"/>
        <AppErrorMessage v-if="error"/> 
        <AppCommentForm :initial-values="initialValues" :errors="validationErrors" :is-submitting="isSubmitting" @commentSubmit="onSubmit"/>
    
        <div class="comments__list" v-if="data">
            <div class="comments__list-item" v-for="(comment, index) in data.comments" :key="index">
                <div class="comments__body">
                    <div class="comments__text">{{comment.body}}</div>
                </div>
                <div class="comments__info">
                        <p><span>author:</span>  {{comment.author.username}}</p>
                        <p><span>data:</span>  {{comment.createdAt}}</p>
                </div>

            </div>
        </div>
       
    </div>
</template>

<script>
import {actionTypes} from '@/store/modules/comment'
import {actionTypes as actionTypesCreateComment} from '@/store/modules/createComment'
import {mapState} from 'vuex'
import AppLoading from '@/components/Loading'
import AppErrorMessage from '@/components/ErrorMessage'
import AppCommentForm from '@/components/CommentForm'
export default{
 name: 'AppComment',
 components:{
     AppLoading,
     AppErrorMessage,
     AppCommentForm
 },
 props: {
     apiUrl:{
         type: String,
         require: true 
     }
 },
 computed:{
     ...mapState({
         isLoading: state => state.comment.isLoading,
         data: state => state.comment.data,
         error: state => state.comment.error,

         isSubmitting: state => state.createComment.isSubmitting,
         validationErrors: state => state.createComment.validationErrors
     }),
 },
 mounted(){
     this.$store.dispatch(actionTypes.getComment, {apiUrl: this.apiUrl})
     
     this.$store.dispatch(actionTypesCreateComment.createComment,{
         slug: this.$route.params.slug
     })
     console.log('that:   '+ this.$route.params.slug)
 }, 




 data(){
     return{
         initialValues:{
             body: ''
         },
     }
 },
 methods:{
     onSubmit(commentInput){
         const slug = this.$route.params.slug
         this.$store.dispatch(actionTypesCreateComment.createComment, {commentInput, slug}).then(
         this.$router.go(0)
         //this.$router.push({name: 'home'}),
        //  this.$router.push({name: 'article', params: {slug: slug}})
         )
     },
 }
}
</script>

<style>
.comments__list{
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
}
.comments__list-item{
   margin: 0 0 10px 0;
}

.comments__body{
    width: 100%;
    padding: 30px 0px 30px 15px;
    border: none;
    border-radius: 5px;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
    background-color: #fff;
}

.comments__info{
    background-color: #f5f5f5;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.comments__info p{
    font: 500 16px/21px 'IBM Plex Sans';
    color: #9181FF;
}
.comments__info span{
    color: #909090;
}
</style>
