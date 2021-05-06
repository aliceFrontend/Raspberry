<template>
    <div class="feedToggle">
        <ul class="feedToggle__list">
            <li v-if="isLoggedIn" class="feedToggle__link">
                <router-link :to="{name: 'yourFeed'}" :class="{active: routeName === 'yourFeed'}">Your Feed</router-link>
            </li>

            <li class="feedToggle__link">
                <router-link :to="{name: 'home'}" :class="{active: routeName === 'globalFeed'}">Global Feed</router-link>
            </li>

            <li v-if="tagName" class="feedToggle__link">
                <router-link :to="{name: 'tag'}" :class="{active: routeName === 'tag'}">{{tagName}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getterTypes} from '@/store/modules/auth'
export default({
    name: 'AppFeedToggler',
    props: {
        tagName: {
            type: String,
            required: false
        }
    },
    computed:{
         ...mapGetters({
             isLoggedIn: getterTypes.isLoggedIn
         }),
         routeName(){
             return this.$route.name
         }
    }
})
</script>

<style>
.feedToggle{
    padding: 30px;
}
.feedToggle__list{
    display: flex;
    border-bottom: 2px solid #c2c5cc; 
}
.feedToggle__link{
    padding: 5px;
    /* border-bottom: 2px solid #7b69fa;  */
    margin: 0 25px 0 0;
}
.feedToggle__link a{
    font: 500 25px/20px 'Poppins', sans-serif;
    letter-spacing: 0px;
    color: black;
}
</style>