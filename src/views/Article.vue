<template>
    <div class="postDetails__wrapper">
        <div class="postDetails" v-if="article">
            <div class="postDetails__title">
                {{article.title}}
            </div>
            <div class="postDetails__author">
                <div class="postDetails__profile">
                    <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}" class="postDetails__image">
                    </router-link>
                </div>
                <div class="postDetails__info">
                    <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}" class="postDetails__name">
                        {{article.author.username}}
                    </router-link>
                    <div class="postDetails__data">
                        {{article.createdAt}}
                    </div>
                </div>
                <div class="postDetails__btn" v-if="isAuthor">
                    <router-link :to="{name: 'editArticle', params:{ slug: article.slug }}" class="postDetails__edit" type="submit">Edit</router-link>
                    <button class="postDetails__delete" type="submit" @click="deleteArticle">Delete</button>
                </div>
            </div>
            <div class="postDetails__image">
                <img :src="article.image" alt=""/>
            </div>
            <div class="postDetails__body">
                <AppLoading v-if="isLoading"/>
                <AppErrorMessage v-if="error" :message="error"/>
                <p v-if="article">
                    {{article.body}}
                    
                </p>
            </div>
            <AppTagList :tags="article.tagList"/>
            <AppAddToFavorites :is-favorited="article.favorited" :article-slug="article.slug" :favorites-count="article.favoritesCount"/>
            <AppComment :api-url="apiUrl"/>
        </div>
    </div>
</template>

<script>
import AppTagList from '@/components/TagList'
import AppLoading from '@/components/Loading'
import AppErrorMessage from '@/components/ErrorMessage'
import {actionTypes as articleActionTypes} from '@/store/modules/article'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'
import {mapState, mapGetters} from 'vuex'
import AppAddToFavorites from '@/components/AddToFavorites'
import AppComment from '@/components/Comment'
export default{
    name: 'AppArticle',
    data(){
        return {
            apiUrl: `/articles/${this.$route.params.slug}/comments`
        }
    },
    components:{
        AppLoading,
        AppErrorMessage,
        AppTagList,
        AppAddToFavorites,
        AppComment
    },
    mounted(){
        this.$store.dispatch(articleActionTypes.getArticle, {
            slug: this.$route.params.slug
        })
    },
    computed:{
        ...mapState({
            isLoading: state => state.article.isLoading,
            error: state => state.article.error,
            article: state => state.article.data
        }),
        ...mapGetters({
            currentUser: authGetterTypes.currentUser
        }),
        isAuthor(){
            if(!this.currentUser || !this.article){
                return false
            }
            return this.currentUser.username === this.article.author.username
        }
    },
    methods:{
        deleteArticle(){
            this.$store.dispatch(articleActionTypes.deleteArticle,{
                slug: this.$route.params.slug
            })
            .then(()=>{
              this.$router.push({name:'home'})  
            })
        }
    }
}
</script>

<style>
.postDetails__wrapper{
    background-image: url('./../assets/images/bgarticle9.svg');
    background-color: #E3E6EC;
    background-repeat: no-repeat;
    background-position: top center;
}
.postDetails{
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    margin: 0 auto;
}
.postDetails__title{
    font: 600 100px/110px 'Poppins', sans-serif;
    line-height: 100px;
    letter-spacing: -1px;
    max-width: 667px;
    padding: 77px 0 30px 0;

}
.postDetails__author{
    margin: 0 0 80px 0;
    align-items: center;
    display: flex;
}
.postDetails__profile{
    width: 60px;
    height: 60px;
    background: -webkit-linear-gradient(left top, rgb(216,15,233) 0%, rgb( 242 ,36 ,23) 100%);
    transition: all 0.4s ease-in-out;
    border-radius: 50%;
    margin: 0 15px 0 0;
}
.postDetails__name{
    font: 500 15px/15px 'Poppins', sans-serif;
    letter-spacing: 0.3px;
    background: -webkit-linear-gradient(#F03226, #C416D3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 10px 0;
}
.postDetails__data{
    font: 200 12px/12px 'Poppins', sans-serif;
    letter-spacing: 0.5px;
    color: #000000;
    opacity: 0.5;
}
.postDetails__body p{
    font: 200 20px/35px 'Poppins', sans-serif; 
    letter-spacing: 0.3px;
    color: #323947;
    /* удалить */
    min-height: 310px;
    /* удалить */
}
/* .postDetails__separation{
    font: 200 16px/35px 'Poppins', sans-serif;
    letter-spacing: 0px;
    color: #323947;
    margin: 30px 0px;
    text-align: center;
} */
.postDetails__delete{
    padding: 13px 35.5px 12px 35.5px;
    border: 1px solid #B85C5C;
    border-radius: 5px;
    background-color: transparent;
    color: #B85C5C;
    font: 500 15px/20px 'IBM Plex Sans';
    transition: all .3s;
    display: block;
    margin: 0 auto;
}
.postDetails__edit{
    padding: 13px 35.5px 12px 35.5px;
    border: 1px solid #999999;
    border-radius: 5px;
    background-color: transparent;
    color: #999999;
    font: 500 15px/20px 'IBM Plex Sans';
    transition: all .3s;
    display: block;
    margin: 0 auto;
}
.postDetails__delete:hover{
    color: #fff;
    background-color: #B85C5C; 
}
.postDetails__edit:hover{
    color: #fff;
    background-color: #999999; 
 }
.postDetails__btn{
    display: flex;
}
.postDetails__info{
    margin: 0 20px 0 0;
}
.postDetails__edit{
    margin: 0 20px 0 0;
}
.postDetails__image{
    position: relative;
    padding: 60% 0 0 0;
    margin: 0 0 60px 0;
}
.postDetails__image img{
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%; */
    border-radius: 16px;
    max-height: 600px;
}
</style>
