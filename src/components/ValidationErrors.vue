<template>
   <div class="form__errors">
            <p>
                <b class="errors__title">Please correct the indicated errors:</b>
                <ul class="errors__items">
                    <li class="errors__item" v-for="errorMessage in errorMessages" :key="errorMessage">{{ errorMessage }}</li>
                </ul>
            </p>
        </div> 
</template>

<script>

export default({
   name: 'app-ValidationErrors',
   props:{
       validationErrors:{
           type: Object,
           require: true
       }
   },
   computed:{
       errorMessages(){
           return Object.keys(this.validationErrors).map(name =>{
               const messages = this.validationErrors[name].join(', ')
               return `${name} ${messages}`
           })
       }
   }
})
</script>

<style>
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
