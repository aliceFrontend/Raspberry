<template>
     <div>
         <div class="id">
             <!-- <p>Post id: {{id}}</p> -->
             <p>Post какой-то</p>
             <div class="btn">
                <!-- <router-link :to="`/AddPost/${post.id}`">Edit Post</router-link>  -->
             </div>
             
        </div>
     </div>
</template>

<script>

export default{
    name: 'app-post', 
    computed: {
        id(){
            return this.$route.params.id;
        }
    }, 
};
</script>
<style scoped>
p{
    text-align: center;
    font: 600 100px/110px 'Poppins', sans-serif;
}
a{
   text-align: center;
    font: 600 50px/60px 'Poppins', sans-serif;
}
</style>