<template>
    <div class="settings" v-if="currentUser">
        <div class="settings__title">
            Your Settings
        </div>
        <div class="settings__errors">
            <AppValidationErrors v-if="validationErrors" :validation-errors = "validationErrors"/>
        </div>
        <form @submit.prevent="onSubmit">
            <div class="settings__username">
                <input type="text" placeholder="Username" v-model="form.username">
            </div>
             <div class="settings__about">
                <textarea name="" id="" cols="10" rows="13" placeholder="Short bio about you" v-model="form.bio"></textarea>
            </div>
            <div class="settings__email">
                <input type="text" placeholder="Email" v-model="form.email">
            </div>
             <div class="settings__newpassword">
                <input type="password" placeholder="Password" v-model="form.password">
            </div>
            <button class="settings__btn" type="submit" :disabled="isSubmitting">Update Settings</button>
        </form>
        <hr>
        <button class="settings__logout" type="submit" @click="logout">Or click here to logout.</button>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import {
  getterTypes as authGetterTypes,
  actionTypes as authActionTypes
} from '@/store/modules/auth'
import AppValidationErrors from '@/components/ValidationErrors'

export default {
  name: 'AppSettings',
  components: {
    AppValidationErrors
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.settings.isSubmitting,
      validationErrors: state => state.settings.validationErrors
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    form() {
      if (this.currentUser) {
        return {
          username: this.currentUser.username,
          bio: this.currentUser.bio,
          image: this.currentUser.image,
          email: this.currentUser.email,
          password: ''
        }
      }

      return {
        username: '',
        bio: '',
        image: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(authActionTypes.updateCurrentUser, {
        currentUserInput: this.form
      })
    },
    logout() {
      this.$store.dispatch(authActionTypes.logout).then(() => {
        this.$router.push({name: 'home'})
      })
    }
  }
}
</script>

<style>
.settings{
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
}
.settings__title{
    margin: 0 0 28px 0;
    font: 500 25px/30px 'IBM Plex Sans';
    text-align: center;
}
.settings__username, .settings__email, .settings__newpassword{
    margin: 0 0 10px 0;
    line-height: 64px;
}
.settings__about{
    margin: 0 0 10px 0;
}
.settings__username input, .settings__email input, .settings__newpassword input, .settings__about textarea{
    width: 100%;
    padding: 0 0px 0 15px;
    border: none;
    border-radius: 5px;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
}
.settings__newpassword{
    margin: 0 0 35px 0;
}
.settings__username input::placeholder, .settings__email input::placeholder, .settings__newpassword input::placeholder, .settings__about textarea::placeholder{
    font: 500 18px/23px 'IBM Plex Sans';
}
.settings__about textarea::placeholder{
    padding: 20px 0 0 0;
}
.settings__btn{
    padding: 18px 40.5px 17px 40.5px;
    border-radius: 5px;
    background-color: #9181FF;
    color: #fff;
    font: 500 18px/23px 'IBM Plex Sans';
    transition: all .3s;
    display: block;
    margin: 0 auto;
}
.settings__btn:hover{
    background-color: #7f6dfc;
}
.settings__logout{
    padding: 13px 35.5px 12px 35.5px;
    border: 1px solid #B85C5C;
    border-radius: 5px;
    background-color: transparent;
    color: #B85C5C;
    font: 500 15px/20px 'IBM Plex Sans';
    transition: all .3s;
    display: block;
    margin: 0 auto;
}
.settings__logout:hover{
    color: #fff;
    background-color: #B85C5C; 
}
</style>