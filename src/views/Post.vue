<template>
     <div>
         <div class="detailsPost__title">
             Пост какой-то
         </div>
     </div>
</template>

<script>
import {mapState} from 'vuex'
export default{
    computed: mapState(['posts'])
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