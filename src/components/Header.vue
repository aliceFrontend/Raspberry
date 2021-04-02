<template>
    <header class="header">
        <a href="#" class="header__logo">
            <img src="./../assets/images/logo.png" alt="">
        </a>
        <div class="header__navs" role="navigation">
            <a class="header__nav-item" href="#">Home</a>
            <a class="header__nav-item" href="#">Blog</a>
            <a class="header__nav-item" href="#">Bookmarks</a>
            <a class="header__nav-item" href="#">Elements</a>
            <a class="header__nav-item" href="#">Playlists</a>
            <a class="header__nav-item" href="#">Books</a>
        </div>
        <!-- <div class="header__auth">
            <div class="auth__sign-btn">Sign in</div>
            <div class="auth__signUp-btn">Sign up</div>
        </div> -->
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
    transition: all .3s;
}
.header__nav-item:last-child{
    margin: 0;
}
.header__navs a:hover{
    color: #251b86;
    opacity:1;
}
/* .header__navs{
    display: flex;
} */
</style>