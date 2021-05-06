<template>
    <div class="home__tags">
        <AppLoading v-if="isLoading"/>
        <AppErrorMessage v-if="error"/>

        <div class="popularTags" v-if="popularTags">
            <div class="popularTags__wrap">
                <div class="popularTags__title"> Popular Tags</div>
                <div class="popularTags__list">
                    <router-link v-for="popularTag in popularTags" 
                        :key="popularTag" 
                        :to="{name: 'tag', params: {slug: popularTag}}"
                        class="popularTags__item">
                        {{popularTag}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'
import AppLoading from '@/components/Loading'
import AppErrorMessage from '@/components/ErrorMessage'
export default({
    name: 'AppPopularTags',
    computed:{
        ...mapState({
            isLoading: state => state.popularTags.isLoading,
            error: state => state.popularTags.error,
            popularTags: state => state.popularTags.data,
        })
    },
    components:{
        AppLoading,
        AppErrorMessage
    },
    mounted(){
        this.$store.dispatch(actionTypes.getPopularTags)
    }
})
</script>

<style>
.popularTags{
    padding: 0 60px 0 15px;
    min-height: 1px;
    /* flex: 0 0 25%; */
    /* max-width: 25%; */


    /* добавленное  */
     /* max-width: 50%; */
    /* конец добавленного */
}
.popularTags__wrap{
    padding: 5px 10px 10px 10px;
    background-color: #E3E6EC;
    border-radius: 4px;
    border: 1px solid red;
}
.popularTags__title{
    padding: 20px 0 0 0;
    margin: 0 0 15px 0;
    font: 500 30px/35px 'Poppins', sans-serif;
    letter-spacing: 0px;
    color: #121212;
}
.popularTags__item{
    color: #fff;
    background-color: #9181FF;
    font-family: 'IBM Plex Sans';
    font-size: 16px;
    padding: 10px 10px 10px 10px;
    margin: 0 3px 6px 0;
    display: inline-block;
    border-radius: 15px;
}
.popularTags__item:hover{
    background-color: #7f6dfc;
    color: #fff;
}
/* добавленное  */
.home__tags{
    width: 27%;
}
/* конец добавленного */
</style>