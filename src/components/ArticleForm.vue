<template>
    <div class="form__body">
        <AppValidationErrors v-if="errors" :validation-errors="errors"/>
        <form action="/" @submit.prevent="onSubmit" >
            <div class="form__heading">
                <input type="text" placeholder="Заголовок" v-model="title">
            </div>
            <div class="form__description">
                <input type="text" placeholder="Описание" v-model="description">
            </div>
            <div class="form__body">
                <textarea name="" id="" cols="10" rows="13" placeholder="Содержимое" v-model="body"></textarea>
            </div>
            <div class="form__tags">
                <input type="text" placeholder="Теги" v-model="tagList">
            </div>
            <div class="form__image">
                    <input type="file" name="file" id="input__file" @change="image = $event.target.files[0]" ref="file">
                    <label for="input__file">
                        <span class="input__file-button">
                            <img src="./../assets/images/Group.svg" alt="">
                        </span>
                        <span class="input__file-button-text">Добавить картинку</span>
                    </label>
            </div>
            <button class="form__btn" type="submit" :disable="isSubmitting">Опубликовать пост</button>
        </form>
    </div>
</template>

<script>
import AppValidationErrors from '@/components/ValidationErrors'
export default{
    name: 'AppArticleForm',
    components:{
        AppValidationErrors
    },
    props:{
        initialValues:{
            type: Object,
            required: true
        },
        errors:{
            type: Object,
            required: false
        },
        isSubmitting: {
            type: Boolean,
            required: true
        }
    },
    data(){
        return {
            title: this.initialValues.title,
            description: this.initialValues.description,
            body: this.initialValues.body,
            tagList: this.initialValues.tagList.join(' '),
            image: ''
        }
    },
    methods:{
        onSubmit(){
            const reader = new FileReader();
            const form = {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: this.tagList.split(' '),
                image: '',
            }

            reader.onload = (e) => {
                form.image = e.target.result;
                this.$emit('articleSubmit', form);
            };
            
            reader.onerror = () => {
                this.$emit('articleSubmit', form);
            };

            reader.readAsDataURL(this.image);
        }
    }
}
</script>


<style>
.form__heading, .form__description,.form__body, .form__tags{
    margin: 0 0 10px 0;
}
.form__heading, .form__description, .form__tags{
    line-height: 64px;
}
.form__heading input,.form__description input ,.form__tags input, .form__body textarea{
    width: 100%;
    padding: 0 0px 0 15px;
    border: none;
    border-radius: 5px;
    font-family: 'IBM Plex Sans';
    font-size: 18px;
}
.form__heading input::placeholder,.form__description input::placeholder, 
.form__tags input::placeholder, .form__body textarea::placeholder, 
.form__image input::placeholder{
    font: 500 18px/23px 'IBM Plex Sans';
}
.form__body textarea{
    padding-top: 20px;
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
</style>