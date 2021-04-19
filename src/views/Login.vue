<template>
     <div class="signIn"> 
        <div class="signIn__title">
           Sign in
        </div>
        <div class="signIn__link">
            <router-link :to="{name: 'register'}">Have an account?</router-link>
        </div>
        
        <div class="signIn__errors">
            <div class="form__errors">
                <p v-if="errors.length">
                    <b class="errors__title">Please correct the indicated errors:</b>
                    <ul class="errors__items">
                        <li class="errors__item" v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </p>
            </div> 
        </div>  
        <form @submit.prevent="onSubmit" >
            <div class="signIn__email">
                <input type="text" placeholder="Email" v-modal="email">
            </div>
            <div class="signIn__password">
                <input type="password" placeholder="Password" v-modal="password">
            </div>
            <button class="signIn__btn" type="submit" :disabled="isSubmitting">Sign In</button>
        </form> 
    </div>
</template>

<script>
import {actionTypes} from '@/store/modules/auth'
export default{
    name: 'app-login',
    data(){
        return {
            user_email: '',
            user_password: '', 
            errors: []
        }
    },
    computed:{
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    }
    },
    methods: {
    onSubmit() {
    //   if(this.user_email && this.user_password){
      this.$store
        .dispatch(actionTypes.login, {
          user_email: this.user_email,
          user_password: this.user_password
        })
        .then(() => {
          this.$router.push({name: 'home'})
        })
        // }

        // this.errors = [];

        //     if(!this.user_email){
        //         this.errors.push('* User email required');
        //     }
        //     if(!this.user_password){
        //         this.errors.push('* User password required');
        //     }
    },
  }
}
</script>

<style>
.signIn{
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
}
.signIn__title{
    margin: 0 0 28px 0;
    font: 500 25px/30px 'IBM Plex Sans';
    text-align: center;
}
.signIn__email, .signIn__password{
    margin: 0 0 10px 0;
    line-height: 64px;
}
.signIn__email input, .signIn__password input {
    width: 100%;
    padding: 0 0px 0 15px;
    border: none;
    border-radius: 5px;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
}
.signIn__password{
    margin: 0 0 35px 0;
}
.signIn__email input::placeholder, .signIn__password input::placeholder{
    font: 500 18px/23px 'IBM Plex Sans';
}
.signIn__btn{
    padding: 18px 40.5px 17px 40.5px;
    border-radius: 5px;
    background-color: #9181FF;
    color: #fff;
    font: 500 18px/23px 'IBM Plex Sans';
    transition: all .3s;
    display: block;
    margin: 0 auto;
}
.signIn__btn:hover{
    background-color: #7f6dfc;
}
.signIn__link{
    text-align: center;
    margin: 0 0 10px 0;
}
.signIn a{
    color: #9181FF;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
}
</style>