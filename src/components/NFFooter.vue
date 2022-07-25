<template>
  <div class="footer_container opacity">
    <div class="footer_navs_container">
      <a @click="navclick('/#about')">{{Nav1}}</a>
      <a @click="navclick('/#creators')">{{Nav2}}</a>
      <a @click="navclick('/#services')">{{Nav3}}</a>
      <a @click="navclick('/#roadmap')" >{{Nav4}}</a>
      <a @click="navclick('/#team')">{{Nav5}}</a>
    </div>
    <div class="row left_astro">
      <div class="or_2 col-sm-12 col-md-12 col-lg-4 col-xl-4 pl_60">
        <img class="floating foot_astro" src="../assets/austranaut.svg" alt="">
      </div>
      <div class="or_1 col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <div class="logo_container text-center">
          <img src="../assets/logo.svg" alt="">
        </div>
      </div>
      <div class="or_3 col-sm-12 col-md-12 col-lg-4 col-xl-4 f_social">
        <div class="row foot_social_links ">
          <a class="discord" :href="discord" target="_blank"><img src="../assets/nfdiscord.svg" alt=""></a>
          <a :href="telegram" target="_blank"><img src="../assets/nftelegram.svg" alt=""></a>
        </div>
      </div>
    </div>
    <div class="copyright_container">
      <p class="text-center"> © 2022 All rights reserved | All images created by freepik - <a target="_blank" href="https://www.freepik.com/" > www.freepik.com</a></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NFFooter.vue",
  data() {
    return {
      windowWidth: window.innerWidth,
      Nav1: null,
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
    navclick: function(n) {
      this.$router.push(n)
    },
  }
}
</script>

<style scoped>
@media screen and (max-width: 576px){
  .f_social {
    padding-top: 0;
  }
}

</style>