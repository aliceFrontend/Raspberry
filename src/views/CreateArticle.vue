<template>
    <div class="form__inner">
         <div class="form__title">Добавить новый пост</div>
        <AppArticleForm 
        :initialValues="initialValues"
        :errors="validationErrors"
        :isSubmitting="isSubmitting"
        @articleSubmit="onSubmit"
        />
    </div>
</template>

<script>
import {mapState} from 'vuex'
import AppArticleForm from '@/components/ArticleForm'
import {actionTypes} from '@/store/modules/createArticle'

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
    }
  },
  computed:{
    ...mapState({
      isSubmitting: state => state.createArticle.isSubmitting,
      validationErrors: state => state.createArticle.validationErrors
    })
  },
  methods: {
    onSubmit(articleInput) {
      this.$store
        .dispatch(actionTypes.createArticle, {articleInput})
        .then(article => {
          this.$router.push({name: 'article', params: {slug: article.slug}})
        })
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