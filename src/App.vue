<template>
  <div class="layout">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<style>

</style>



<script>
import Header from '@/components/Header.vue';

export default({
 components: { 
   'app-header':Header 
  },
})
</script>




