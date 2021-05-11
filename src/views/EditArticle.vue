<template>
    <div>
        <AppLoading v-if="isLoading"/>
        <div class="form__inner" v-if="initialValues">
            <div class="form__title">Edit Post</div>
            <AppArticleForm 
            :initialValues="initialValues"
            :errors="validationErrors"
            :isSubmitting="isSubmitting"
            @articleSubmit="onSubmit"
            />
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import AppArticleForm from '@/components/ArticleForm'
import AppLoading from '@/components/Loading'
import {actionTypes} from '@/store/modules/editArticle'

export default {
  name: 'AppEditArticle',
  components: {
    AppArticleForm,
    AppLoading
  },
  computed:{
    ...mapState({
      isSubmitting: state => state.editArticle.isSubmitting,
      isLoading: state => state.editArticle.isLoading,
      article: state => state.editArticle.article,
      validationErrors: state => state.editArticle.validationErrors
    }),
    initialValues(){
        if(!this.article){
            return null
        }
        return {
            title: this.article.title,
            description: this.article.description,
            body: this.article.body,
            tagList: this.article.tagList
        }
    }
  },
  mounted(){
      this.$store.dispatch(actionTypes.getArticle,{
          slug: this.$route.params.slug
      })
  },
  methods: {
    onSubmit(articleInput) {
      const slug = this.$route.params.slug
      this.$store
        .dispatch(actionTypes.updateArticle, {articleInput, slug})
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