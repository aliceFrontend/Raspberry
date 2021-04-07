<template>
<div class="addPost__wrap">
    <div class="addPost__inner">
        <div class="addPost__title">Create new Post</div>
            <form action="#" method="post" enctype="multipart/form-data" class="addPost__form">
                <div class="addPost__heading">
                    <input type="text" placeholder="Title">
                </div>
                <div class="addPost__subtitle">
                        <textarea name="" id="" cols="10" rows="18" placeholder="Subtitle"></textarea>
                </div>
                <div class="addPost__image">
                        <input type="file" name="file" id="input__file">
                        <label for="input__file">
                            <span class="input__file-button">
                                <img src="./../assets/images/Group.svg" alt="">
                            </span>
                            <span class="input__file-button-text">Add Image</span>
                        </label>
                </div>
                <button class="addPost__btn">Publish Article</button>
            </form>
    </div>
</div>
</template>

<script>
// import Post from '@/components/Post';

export default({
   
})
</script>

<style>
.addPost__wrap{
    padding: 50px;
}
.addPost__inner{
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
}
.addPost__title{
    margin: 0 0 38px 0;
    font: 500 25px/30px 'IBM Plex Sans';
    text-align: center;
}
.addPost__heading, .addPost__subtitle{
    margin: 0 0 10px 0;
}
.addPost__heading{
    line-height: 64px;
}
.addPost__heading input, .addPost__subtitle textarea{
    width: 100%;
    padding: 0 0px 0 15px;
    border: none;
    border-radius: 5px;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
}
.addPost__heading input::placeholder, .addPost__subtitle textarea::placeholder, .addPost__image input::placeholder{
    font: 500 18px/23px 'IBM Plex Sans';
}
.addPost__subtitle textarea::placeholder{
    padding: 20px 0 0 0;
}
.addPost__image input {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.input__file-button-text{
    font: 400 18px/22px 'IBM Plex Sans';
    color: #523EDB;
    border-bottom: 1px solid #523EDB;
    transition: all .3s;
}
.input__file-button-text:hover{
    color: #280dde;
    border-bottom: 1px solid #280dde;
    cursor: pointer;
}
.addPost__image{
    margin: 0 0 45px 0;
}
.addPost__image label{
    display: flex;
} 
.addPost__btn{
    padding: 18px 40.5px 17px 40.5px;
    border-radius: 5px;
    background-color: #9181FF;
    color: #fff;
    font: 500 18px/23px 'IBM Plex Sans';
    transition: all .3s;
    display: block;
    margin: 0 auto;
}
.addPost__btn:hover{
    background-color: #7f6dfc;
}
.input__file-button-text{
    font: 400 18px/22px 'IBM Plex Sans';
    color: #523EDB;
    border-bottom: 1px solid #523EDB;
    transition: all .3s;
}
</style>
