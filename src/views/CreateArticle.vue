<template>
    <div class="form__inner">
         <div class="form__title">Create new Post</div>
        <AppArticleForm 
        :initialValues="initialValues"
        :errors="validationErrors"
        :isSubmitting="isSubmitting"
        @articleSubmit="onSubmit"
        />
    </div>
</template>

<script>
import AppArticleForm from '@/components/ArticleForm'

export default {
  name: 'AppCreateArticle',
  components: {
    AppArticleForm
  },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      validationErrors: null,
      isSubmitting: false
    }
  },
  methods: {
    onSubmit(data) {
      console.log('onSubmit', data)
    }
  }
}
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
</style>