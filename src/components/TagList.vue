<template>
    <ul class="tagList">
        <li v-for="tag in tags" :key="tag" class="tagList__item">{{ tag }}</li>        
    </ul>
</template>

<script>
export default {
 name: 'AppTagList',
 props: {
     tags:{
         type: Array,
         required: true
     }
 }   
}
</script>

<style>
.tagList{
    padding-left: 0px !important;
    display: flex;
    flex-wrap: wrap;
    list-style: none !important;
}
.tagList__item{
    font: 200 14px/19px 'Poppins', sans-serif;
    letter-spacing: 0.3px;
    color: #999999;
    border: 1px solid #999999;
    padding: 10px;
    border-radius: 10rem;
    margin: 5px;
}
</style>