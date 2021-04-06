<template>
  <div class="layout">
    <Header></Header>

    <router-view/>
  </div>
</template>

<style>

</style>



<script>
import Header from '@/components/Header.vue';

export default({
 components: { Header },
})
</script>




