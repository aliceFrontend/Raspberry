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
import {actionTypes} from '@/store/modules/auth'
export default({
 name: 'app',
 components: { 
   'app-header':Header 
  },
  mounted(){
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
})
</script>




