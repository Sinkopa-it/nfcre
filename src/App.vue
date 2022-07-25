<template>
  <div id="app" class="main_container">
    <NFHead />
    <router-view></router-view>
<!--    <MainPage />-->

  </div>


</template>

<script>

// import MainPage from './components/MainPage.vue'
import NFHead from './components/NFHead.vue'

export default {
  name: 'App',
  methods: {

  },
  components: {
    // MainPage,
    NFHead
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  .main_container {
    /*background-image: url("./assets/bg.png");*/

  }
  h2 {
    font-family: 'Russo One', sans-serif!important;
    font-style: normal;
    font-weight: 400;
    font-size: 60px!important;
    line-height: 72px;
    color: #FFFFFF!important;
  }
  .nav-link:focus, .nav-link:hover {
    color:#4BDF15;
  }

</style>
