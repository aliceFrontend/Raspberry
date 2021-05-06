<template>
  <div class="layout">
    <AppHeader/>
    <router-view></router-view>
  </div>
</template>

<style>

</style>



<script>

import AppHeader from '@/components/Header.vue';
import {actionTypes} from '@/store/modules/auth'
export default({
 name: 'app',
 components: { 
   AppHeader 
  },
  mounted(){
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
})
</script>

<style>
.layout{
  max-width: 1920px;
  margin: 0 auto;
}
</style>




