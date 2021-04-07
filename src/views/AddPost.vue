<template>
    <div class="addPost__wrap">
        <div class="addPost__title">Create new Post</div>
        <div class="addPost__body">
            <form action="" class="addPost__form">
                <div class="addPost__heading">
                    <input type="text" placeholder="Title">
                </div>
                <div class="addPost__subtitle">
                     <input type="text" placeholder="Sutitle">
                </div>
                <div class="addPost__image">
                     <input type="text" placeholder="Image">
                </div>
                <button class="addPost__btn">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
// import Post from '@/components/Post';

export default({
//    components: {Post}
})
</script>

<style>
.addPost__wrap{
    padding: 50px 50px 50px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.addPost__title{
    margin: 0 0 38px 0;
    font: 500 25px/30px 'IBM Plex Sans';
}
.addPost__heading, .addPost__subtitle{
    margin: 0 0 10px 0;
}
.addPost__image{
    margin: 0 0 45px 0;
}
.addPost__heading input, .addPost__subtitle input, .addPost__image input{
    line-height: 63px;
    padding: 0 0px 0 15px;
    min-width: 355px;
    border: 0;
    border-radius: 5px;
    
}
.addPost__heading input::placeholder, .addPost__subtitle input::placeholder, .addPost__image input::placeholder{
    font: 500 18px/23px 'IBM Plex Sans';
}
.addPost__btn{
    padding: 18px 40.5px 17px 40.5px;
    border-radius: 5px;
    background-color: #9181FF;
    color: #fff;
    font: 500 18px/23px 'IBM Plex Sans';
}
</style>
