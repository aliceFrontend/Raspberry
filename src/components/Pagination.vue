<template>
   <ul class="pagination">
       <li v-for="page in pages" :key="page" class="pagination-item" :class="{active: currentPage === page}">
          <router-link :to="{path: url, query:{page: page}}" class="pagination-link">{{page}}</router-link>
       </li>
   </ul>
</template>

<script>
import {range} from '@/helpers/utils'
export default({
    name: 'AppPagination',
    props: {
        total: {
            type: Number,
            required: true
        },
        limit:{
            type: Number,
            required: true
        },
        currentPage:{
            type: Number,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    },
    computed:{
        pages(){
            const pagesCount = Math.ceil(this.total / this.limit)
            return range(1, pagesCount)
        }
    }
})
</script>

<style>
.pagination{
    display: flex;
    flex-wrap: wrap;
    padding: 0 30px 0 30px;
    max-width: 1300px;
    margin: 0 auto;
    justify-content: space-between;
}
.pagination a{
    color: #9181FF;
    font: 500 15px/20px 'Poppins', sans-serif;
    float: left;
    padding: 8px 16px;
    border: 1px solid #ddd;
}
.pagination a.active{
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
}
.pagination a:hover:not(.active){
    background-color: #ddd;
    border-radius: 5px;
}
.active{
    color: red;
}
</style>