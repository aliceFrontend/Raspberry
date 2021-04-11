<template>
     <div>
         <div class="id">
             <p>Post id: {{id}}</p>
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
</style>