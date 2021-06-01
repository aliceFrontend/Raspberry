<template>
  <div class="noteFound">
    <router-link to="/" class="noteFound__image">
      <img src="./../assets/images/export_404.svg" class="noteFaund__desktop" alt="" />
    </router-link>
    <div class="noteFound__info">
      <div class="noteFound__title">404</div>
      <div class="noteFound__subtitle">Oops! Page not found</div>
      <div class="noteFound__text">
        This page does not exist or has been deleted. <br />
        Don't worry
      </div>
    </div>
  </div>
</template>

<style>
.noteFound {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 270px 30px 270px;
}
.noteFound__image img {
  width: 80%;
}
.noteFound__title {
  font: 800 12vw/12vw  'Libre Franklin';
  color: #E3E6EC;
  text-shadow: -3px -3px 0 #171717, 3px -3px 0 #171717, -3px 3px 0 #171717, 3px 3px 0 #171717;
  width: 100%;
  height: auto;
}
.noteFound__subtitle {
  height: auto;
  width: 100%;
  font: 400 34px/45px 'Libre Franklin';
  color: #171717;
  letter-spacing: 1px;
  padding: 0;
}
.noteFound__text {
  height: auto;
  width: 100%;
  font: 400 20px/36px 'Libre Franklin';
  color: #171717;
  letter-spacing: 0.4px;
  padding: 0;
}
.noteFound__mobile{
  display: none;
}
@media(max-width: 1440px){
  .noteFound__image img {
    width: 95%;
}
}
@media(max-width: 1150px){
  .noteFound{
    flex-direction: column-reverse;
  }
}
@media(max-width: 1000px){
  .noteFound{
    padding: 100px 150px 30px 150px;
  }
}
@media(max-width: 768px){
.noteFound {
    padding: 100px 50px 30px 50px;
}
}
@media(max-width: 660px){}
@media(max-width: 425px){}
@media(max-width: 375px){}
@media(max-width: 300px){}
</style>
