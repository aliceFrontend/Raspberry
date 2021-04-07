<template>
    <header class="header">
        <a href="#" class="header__logo">
            <img src="./../assets/images/logo.png" alt="">
        </a>
        <div class="header__navs" role="navigation">
            <router-link to="/" exact class="header__nav-item">Home</router-link>
            <router-link to="/login" class="header__nav-item">Log in</router-link>
            <router-link to="/register" class="header__nav-item">Sign up</router-link>
        </div>
    </header>
</template>

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

.router-link-active, .router-link-active>a{
    color: #E7165D;
    border-bottom: 2px solid #FF357A;
    opacity: 1;
}
</style>