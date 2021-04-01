<template>
    <div class="noteFound">
        <div class="image">
            <img src="./../assets/export_404.svg" alt="">
        </div>
        <div class="info">
            <div class="title">404</div>
            <div class="subtitle">Oops! Page not found</div>
            <div class="text">
                This page does not exist or has been deleted. <br>
                Don't worry
            </div>
            <div class="link">
               <a href="#">Back to Home</a>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.noteFound{
    display: flex;
    align-items: center;
    justify-content: center;
}
/* .info{
    position: absolute;
    top: 30%;
    left: 50%;
    width: 50%;
    z-index: 1;
} */
.image img{
    width: 80%;
}
.title{
    font-family: 'Libre Franklin';
    color: white;
    text-shadow: -3px -3px 0 #171717, 3px -3px 0 #171717, -3px 3px 0 #171717, 3px 3px 0 #171717;
    font-size: 12vw;
    width: 100%;
    height: auto;
    font-weight: 800;
    line-height: 14vw;
}
.subtitle{
    height: auto;
    width: 100%;
    color: #171717;
    font-family: "Libre Franklin";
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 1px;
    padding: 0;
    font-weight: 400;
}
.text{
    height: auto;
    width: 100%;
    color: #171717;
    font-family: "Libre Franklin";
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0.4px;
    padding: 0;
    font-weight: 400;
}
.link a{
    display: inline-block;
    font-family: "Libre Franklin";
    color: #171717;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    /* position: absolute;
    right: 45%;
    top: 110%; */
}
</style>