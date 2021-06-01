<template>
    <div class="auth"> 
        <div class="auth__title">
           Sign up
        </div>
        <div class="auth__link">
            <router-link :to="{name: 'login'}">Need an account?</router-link>
        </div>
        <div class="auth__errors">
           <McvValidationErrors v-if="validationErrors" :validation-errors = "validationErrors"/>
        </div>  
        <form @submit.prevent="onSubmit" >
            <div class="auth__name">
                <input type="text" placeholder="Name" v-model="username">
            </div>
            <div class="auth__email">
                <input type="email" placeholder="Email" v-model="email">
            </div>
            <div class="auth__password">
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <button class="auth__btn" type="submit" :disabled="isSubmitting">Sign Up</button>
        </form> 
    </div>
</template>

<script>
import {mapState} from 'vuex'

import McvValidationErrors from '@/components/ValidationErrors.vue'
import {actionTypes} from '@/store/modules/auth'
export default {
  name: 'McvRegister',
  components: {
    McvValidationErrors
  },
  data() {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors
    })
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.register, {
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({name: 'globalFeed'})
        })
    }
  }
}
</script>


<style>
.auth{
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
}
.auth__title{
    margin: 0 0 28px 0;
    font: 500 25px/30px 'IBM Plex Sans';
    text-align: center;
}
.auth__name, .auth__email, .auth__password{
    margin: 0 0 10px 0;
    line-height: 64px;
}
.auth__name input, .auth__email input, .auth__password input {
    width: 100%;
    padding: 0 0px 0 15px;
    border: none;
    border-radius: 5px;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
}
.auth__password{
    margin: 0 0 35px 0;
}
.auth__name input::placeholder, .auth__email input::placeholder, .auth__password input::placeholder{
    font: 500 18px/23px 'IBM Plex Sans';
}
.auth__btn{
    padding: 18px 40.5px 17px 40.5px;
    border-radius: 5px;
    background-color: #9181FF;
    color: #fff;
    font: 500 18px/23px 'IBM Plex Sans';
    transition: all .3s;
    display: block;
    margin: 0 auto;
}
.auth__btn:hover{
    background-color: #7f6dfc;
}
.auth__link{
    text-align: center;
    margin: 0 0 10px 0;
}
.auth__link a{
    color: #9181FF;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
}
</style>