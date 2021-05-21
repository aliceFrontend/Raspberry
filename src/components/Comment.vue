<template>
    <div class="comments__wrap">
        <AppLoading v-if="isLoading"/>
        <AppErrorMessage v-if="error"/> 
        <div class="comments" v-if="data">
            <div class="comments__item" v-for="(comment, index) in data.comments" :key="index">
                 <div>{{comment.body}}</div>
                <textarea name="" id="" cols="10" rows="7" placeholder="Write a comment..." v-model="form.body"></textarea>
                <div class="comments__footer">
                    <button class="comments__btn" type="submit">Post Comment</button>
                    
                    <div class="comments__info">
                        <p><span>author:</span>  {{comment.author.username}}</p>
                        <p><span>data:</span>  {{comment.createdAt}}</p>
                    </div>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
import {actionTypes} from '@/store/modules/comment'
import {mapState} from 'vuex'
import AppLoading from '@/components/Loading'
import AppErrorMessage from '@/components/ErrorMessage'
export default{
 name: 'AppComment',
 components:{
     AppLoading,
     AppErrorMessage
 },
 data(){
     return {
          body: this.form.body,
     }
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
         error: state => state.comment.error
     }),
     form(){
        return {
         body: this.data.body
        }
     }
 },
 mounted(){
     this.$store.dispatch(actionTypes.getComment, {apiUrl: this.apiUrl})
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
    padding: 20px 0px 0 15px;
    border: none;
    border-radius: 5px;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
    background-color: #fff;
    /* margin: 0 0 30px 0; */
}
.comments__item textarea::placeholder{
    font: 500 18px/23px 'IBM Plex Sans';
    /* padding: 20px 0 0 0; */
}
.comments__btn{
    padding: 13px 30.5px 12px 30.5px;
    border-radius: 5px;
    background-color: #9181FF;
    color: #fff;
    font: 500 16px/21px 'IBM Plex Sans';
    transition: all .3s;
    /* display: block;
    margin: 0 auto; */
}
.comments__btn:hover{
    background-color: #7f6dfc;
}
.comments__footer{
    background-color: #f5f5f5;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.comments__info{
    font: 500 16px/21px 'IBM Plex Sans';
    color: #9181FF;
}
.comments__info span{
    /* font: 500 16px/21px 'IBM Plex Sans'; */
    color: #909090;
}
</style>
