<template>
  <div>
    Home Page

    <div class="wrap">
      <div class="title">
        Список постов 
        <p>{{posts}}</p>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>

</style>

<script>

export default{
  data(){
    return{
      img: "",
      data: "",
      title: "",
      subtitle: "", 
      posts: [
        {img: "/img1", data: "16.09.2001", title: "Title", subtitle: "Subtitle"},
        {img: "/img1", data: "16.09.2001", title: "Title", subtitle: "Subtitle"},
        {img: "/img1", data: "16.09.2001", title: "Title", subtitle: "Subtitle"},
        {img: "/img1", data: "16.09.2001", title: "Title", subtitle: "Subtitle"},
        {img: "/img1", data: "16.09.2001", title: "Title", subtitle: "Subtitle"},
        {img: "/img1", data: "16.09.2001", title: "Title", subtitle: "Subtitle"},
        {img: "/img1", data: "16.09.2001", title: "Title", subtitle: "Subtitle"},
        {img: "/img1", data: "16.09.2001", title: "Title", subtitle: "Subtitle"},
        {img: "/img1", data: "16.09.2001", title: "Title", subtitle: "Subtitle"},
        {img: "/img1", data: "16.09.2001", title: "Title", subtitle: "Subtitle"},
      ]
    };
  }
}
</script>



