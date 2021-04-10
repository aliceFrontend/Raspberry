<template>
    <div class="form__inner">
        <div class="form__title">Create new Post</div>
        <div class="form__errors">
            <p v-if="errors.length">
                <b class="errors__title">Please correct the indicated errors:</b>
                <ul class="errors__items">
                    <li class="errors__item" v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>
        </div>   
            <form action="/" @submit.prevent="submit" >
                <div class="form__heading">
                    <input type="text" placeholder="Title" v-model="title">
                </div>
                <div class="form__subtitle">
                        <textarea name="" id="" cols="10" rows="18" placeholder="Subtitle" v-model="subtitle"></textarea>
                </div>
                <div class="form__image">
                        <input type="file" name="file" id="input__file">
                        <label for="input__file">
                            <span class="input__file-button">
                                <img src="./../assets/images/Group.svg" alt="">
                            </span>
                            <span class="input__file-button-text">Add Image</span>
                        </label>
                </div>
                <button class="form__btn" type="submit">Publish Article</button>
            </form>
            <p>{{posts}}</p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default({
    data() {
      return{
          posts:[],
          errors: [],
          image: 'thumb_article8',
          data: 'Maret 15, 2021',
          title: '', 
          subtitle: ''
      }; 
    },
    methods: {
        ...mapMutations(['createPost']),
        submit(){
            if(this.title && this.subtitle){
            this.createPost({
                title: this.title,
                subtitle: this.subtitle,
                image: 'thumb_article8',
                data: 'Maret 15, 2021',
                id: Date.now()

            });
            this.$router.push({ name: 'home' });
            }

            this.errors = [];

            if(!this.title){
                this.errors.push('* Post title required');
            }

            if(!this.subtitle){
                this.errors.push('* Post description required');
            }

        }
    }, 
})
</script>


<style>
.form__inner{
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
}
.form__title{
    margin: 0 0 38px 0;
    font: 500 25px/30px 'IBM Plex Sans';
    text-align: center;
}
.form__heading, .form__subtitle{
    margin: 0 0 10px 0;
}
.form__heading{
    line-height: 64px;
}
.form__heading input, .form__subtitle textarea{
    width: 100%;
    padding: 0 0px 0 15px;
    border: none;
    border-radius: 5px;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
}
.form__heading input::placeholder, .form__subtitle textarea::placeholder, .form__image input::placeholder{
    font: 500 18px/23px 'IBM Plex Sans';
}
.form__subtitle textarea::placeholder{
    padding: 20px 0 0 0;
}
.form__image input {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.input__file-button-text{
    font: 400 18px/22px 'IBM Plex Sans';
    color: #523EDB;
    border-bottom: 1px solid #523EDB;
    transition: all .3s;
}
.input__file-button-text:hover{
    color: #280dde;
    border-bottom: 1px solid #280dde;
    cursor: pointer;
}
.form__image{
    margin: 0 0 45px 0;
}
.form__image label{
    display: flex;
} 
.form__btn{
    padding: 18px 40.5px 17px 40.5px;
    border-radius: 5px;
    background-color: #9181FF;
    color: #fff;
    font: 500 18px/23px 'IBM Plex Sans';
    transition: all .3s;
    display: block;
    margin: 0 auto;
}
.form__btn:hover{
    background-color: #7f6dfc;
}
.input__file-button-text{
    font: 400 18px/22px 'IBM Plex Sans';
    color: #523EDB;
    border-bottom: 1px solid #523EDB;
    transition: all .3s;
}
.form__errors{
    margin: 0 0 10px 0;
}
.errors__title{
    font: 500 18px/23px 'IBM Plex Sans';
}
.errors__item{
    font: 500 16px/21px 'IBM Plex Sans';
    color: #FF0033;
}
</style>