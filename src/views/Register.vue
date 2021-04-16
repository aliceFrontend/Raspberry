<template>
    <div class="auth"> 
        <div class="auth_title">
           Sign up
        </div>
        <router-link :to="{name: 'login'}" class="auth-link">Need an account?</router-link>
        <div class="auth__errors">
            VALIDATION ERRORS
        <!-- <p v-if="errors.length">
            <b class="errors__title">Please correct the indicated errors:</b>
            <ul class="errors__items">
                <li class="errors__item" v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p> -->
        </div>  
        <form @submit.prevent="onSubmit" >
            <div class="auth__name">
                <input type="text" placeholder="name" v-model="auth.user_name">
            </div>
            <div class="auth__email">
                <input type="text" placeholder="email" v-model="auth.user_email">
            </div>
            <div class="auth__password">
                <input type="password" placeholder="password" v-model="auth.user_password">
            </div>
            <button class="auth__btn" type="submit" :disabled="isSubmitting">Sign Up</button>
        </form> 
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'app-register',
    data(){
        return {
            auth: {
            user_email: '',
            user_name: '',
            user_password: ''}
        }
    },
    computed:{
    
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    }
    },
    methods: {
    // onSubmit() {
    //   this.$store
    //     .dispatch('register', {
    //       user_email: this.user_email,
    //       user_name: this.user_name,
    //       user_password: this.user_password
    //     })
    //     .then(() => {
    //       this.$router.push({name: 'home'})
    //     })
    // }
    onSubmit(){
        axios
        .post('register', this.auth)
        .then((response)=>{
        // тут обработка ответа сервера, в response у тебя будет response.data.status и response.data.user_id
        console.log(response.data.status);
        console.log(response.data.user_id);
        })
        .catch((error)=>{
        // обработка ошибка api-сервера - ну там вывод какого-нидь "упс... что-то пошло не так"
        console.log('error', error);
        })
    }
  }
}
</script>
<style>
.auth{
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
}
</style>