<template>
  <div class="header_opacity">

    <div class="header_container pl_60">
      <div class="logo_container">
        <img @click="routeclick()" src="../assets/logo.svg" alt="">
      </div>
      <div class="mobile_navs_container">
        <Slide right
               :closeOnNavigation="true"
               @openMenu="handleOpenMenu"
               @closeMenu="handleCloseMenu"
               :width="windowWidth"
        >
          <div class="mobile_navs">

          <a @click="navclick('/#about')">{{Nav1}}</a>
          <a @click="navclick('/#creators')">{{Nav2}}</a>
          <a @click="navclick('/#services')">{{Nav3}}</a>
          <a @click="navclick('/#roadmap')" >{{Nav4}}</a>
          <a @click="navclick('/#team')">{{Nav5}}</a>
            <div class="mobile_links">
              <img class="mob_astro" src="../assets/austranaut.svg" alt="">
              <div class="row d-flex links_container">
                <a class="discord" target="_blank" :href="discord"><img src="/img/nfdiscord.1ba3bbe2.svg" alt=""></a>
                <a target="_blank" :href="telegram"><img src="/img/nftelegram.3ee029cf.svg" alt=""></a></div>
            </div>
          </div>

        </Slide>
      </div>


    <div class="navs_container pr_60">
      <a @click="navclick('/#about')">{{Nav1}}</a>
      <a @click="navclick('/#creators')">{{Nav2}}</a>
      <a @click="navclick('/#services')">{{Nav3}}</a>
      <a @click="navclick('/#roadmap')" >{{Nav4}}</a>
      <a @click="navclick('/#team')">{{Nav5}}</a>
    </div>

  </div>
  </div>


</template>

<script>
import { Slide } from 'vue3-burger-menu'
import axios from "axios";

export default {
  components: {
    Slide // Register your component
  },
  name: "NFHead.vue",
  data() {
    return {
      windowWidth: window.innerWidth,
      Nav1: '',
      Nav2: null,
      Nav3: null,
      Nav4: null,
      Nav5: null,
      telegram:null,
      discord:null,
    }
  },
  created() {
    axios.get("https://cockpit.nfcreators.io/api/collections/entries/Navigation")
        .then(response => {

          this.Nav1 = response.data.entries[0].nav1;
          this.Nav2 = response.data.entries[0].nav2;
          this.Nav3 = response.data.entries[0].nav3;
          this.Nav4 = response.data.entries[0].nav4;
          this.Nav5 = response.data.entries[0].nav5;

        });
    axios.get("https://cockpit.nfcreators.io/api/collections/entries/Social_links")
        .then(response => {
          this.telegram = response.data.entries[0].Telegram;
          this.discord = response.data.entries[0].Discord;
        });
  },

  methods: {
    routeclick: function() {
      this.$router.push('/')
    },
    navclick: function(n) {
      this.$router.push(n)
    },
    handleOpenMenu: function () {
    // $("#slide_m.div").width('100%');
    //   document.getElementById("#slide_m").width('30%');
      this.$el.querySelector(".bm-menu ").style.width = '100%!important';
    },
    handleCloseMenu: function () {

    },

  },
}
</script>

<style >



.header_container {
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 20;
}
.header_opacity {
  background: rgba(1, 0, 42, 0.7);
  position: sticky;
  top: 0;
  z-index: 99;
}
.navs_container {
  padding-top: 31px;
}
.navs_container a {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  text-decoration: none;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #FFFFFF!important;
  cursor: pointer;
  padding-left: 40px;
}
.navs_container a:hover {
  color: #4BDF15!important;
}
.logo_container img{
  width: 167px;
  cursor: pointer;
}
.logo_container {
  padding-top: 26px;
}
.bm-burger-button {
  content: '';
  position: absolute;
  width: 36px;
  height: 30px;
  right: 15px!important;
  left: auto!important;
  top: 30px!important;
  cursor: pointer;
}
.bm-burger-button span:nth-child(1) {

}
.bm-burger-button span:nth-child(2) {

}
.bm-burger-button span:nth-child(3) {
  width: 60%!important;
  right: 0!important;
  left: auto!important;
}
.line-style {
  height: 10% !important;
}
.bm-burger-bars {
  background-color: #4BDF15!important;
}
.bm-cross {
  background: #4BDF15!important;
  height:30px!important;
}
.bm-menu {
  color: white!important;
  background: url("../assets/bg_mobile.jpg")!important;
  background-size: cover!important;
}
.bm-item-list> * {
  display: grid!important;
  color: #fffFFF;
  text-transform: uppercase;
  margin: auto;
  font-family: 'Rubik', sans-serif;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 1.2px;

}
.bm-item-list a {
  padding-top: 10%;
}
.bm-cross-button {
  top:30px!important;
  right: 15px!important;
  left: auto!important;
}
.bm-item-list {
  margin-left: 0!important;
}
.mobile_links .links_container {
  margin-top: 12%;
}
.mobile_links > img {
  position: absolute!important;
  height: 95px!important;
  left: -20px!important;
}
@media screen and (min-width: 576px){
  .mobile_navs_container {
    display: none;
  }
}

</style>