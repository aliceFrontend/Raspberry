<template>
    <div class="comments">
        <div class="comments__item">
            <textarea name="" id="" cols="10" rows="7" placeholder="Write a comment..."></textarea>
            <div class="comments__footer">
                <button class="comments__btn" type="submit"  :initialValues="initialValues" :errors="validationErrors" :isSubmitting="isSubmitting" @articleSubmit="onSubmit">
                    Post Comment
                </button>
            </div>   
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/createComment'
export default{
    name: 'AppCommentFrom',
    data(){
        return {
        initialValues: {
        body: '',
        },
      }
    },
    computed:{
        ...mapState({
            isSubmitting: state => state.createComment.isSubmitting,
            validationErrors: state => state.createComment.error
        })
    },
    methods:{
        onSubmit(apiUrl) {
      this.$store
        .dispatch(actionTypes.createComment, {apiUrl})
        .then()
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
    padding: 20px 0px 0 15px;
    border: none;
    border-radius: 5px;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
    background-color: #fff;
}
.comments__item textarea::placeholder{
    font: 500 18px/23px 'IBM Plex Sans';
}
.comments__btn{
    padding: 13px 30.5px 12px 30.5px;
    border-radius: 5px;
    background-color: #9181FF;
    color: #fff;
    font: 500 16px/21px 'IBM Plex Sans';
    transition: all .3s;
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
    color: #909090;
}
</style>