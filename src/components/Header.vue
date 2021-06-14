<template>
    <header class="header">
        <router-link :to="{name: 'home'}" class="header__logo">
            <img src="./../assets/images/logo.png" alt="">
        </router-link>
        <div class="header__navs" role="navigation">

            <router-link :to="{name: 'home'}" class="header__nav-item" active-class="active">Главная</router-link>

            <template v-if="isLoggedIn">

                 <router-link :to="{name: 'createArticle'}" class="header__nav-item" active-class="active">Новый пост</router-link>
                 <router-link :to="{name: 'settings'}" class="header__nav-item" active-class="active">Настройки</router-link> 
                 <router-link :to="{name: 'userProfile', params: {slug: currentUser.username}}" class="header__nav-item" active-class="active">
                <img :src="currentUser.image" alt=""> 
                &nbsp;
                {{ currentUser.username }}
                </router-link> 
                <!-- <router-link to="http://localhost/blog.ru/#">Admin</router-link> -->
                <!-- <a href="http://localhost/blog.ru/#">Admin</a> -->

            </template>
            
            <template v-if="isAnonymous">

                <router-link :to="{name: 'login'}" class="header__nav-item" active-class="active">Войти</router-link>
                <router-link :to="{name: 'register'}" class="header__nav-item" active-class="active">Регистрация</router-link>

            </template>

        </div>
    </header>
</template>

<script>
import {getterTypes} from '@/store/modules/auth'
import {mapGetters} from 'vuex'
export default({
    name: 'app-header',
    computed:{
        ...mapGetters({
            currentUser: getterTypes.currentUser,
            isLoggedIn: getterTypes.isLoggedIn,
            isAnonymous: getterTypes.isAnonymous
        })
  }
})
</script>


<style>
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px 10px 30px;
}
.header__logo img{
    width: 50px !important;
}
.header__nav-item{
    margin: 0 30px 0 0;
}
.header__navs a{
    text-decoration: none;
    font: 500 12px/20px  'Poppins', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #251B33; 
    opacity: 0.3; 
    border-bottom: 2px solid rgba(255,255,255, 0.0);
    transition: all .3s;
}
.header__nav-item:last-child{
    margin: 0;
}
.header__navs a:hover{
    color: #251b86;
    opacity:1;
}

/* .active{
    color: #E7165D;
    border-bottom: 2px solid #FF357A;
    opacity: 1;
}
.router-link-active, .router-link-active>a{
    color: #E7165D;
    border-bottom: 2px solid #FF357A;
    opacity: 1;
} */
</style>