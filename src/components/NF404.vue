<template>
  <div class="er_container"
  >

    <div class="er_data">
    <h4>404</h4>
    <p>Page not found</p>
    <a class="nf_button cr_b" @click="routeclick">MAIN PAGE</a>
    </div>

   <n-f-footer></n-f-footer>
  </div>

</template>

<script>

import NFFooter from '../components/NFFooter.vue';


export default {
  name: "NF404.vue",
  components: {
    NFFooter
  },
  methods:{
    routeclick: function() {
      this.$router.push('/')
    },
    navclick: function(n) {
      this.$router.push(n)
    }
  }
}
</script>

<style scoped>
.er_container {
  background-image: url("../assets/serbg.png");
  padding-top: 80px;
  margin-top: -80px;
  background-size: cover;
}
.er_data {
  text-align: center;
  padding-top: 10%;
}
.er_data h4 {
  font-family: 'Russo One', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 120px!important;
  line-height: 145px;
  padding-bottom: 20px;
  /* white */

  color: #FFFFFF;

}
.er_data p {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 120%;
  /* identical to box height, or 34px */
  padding-bottom: 20px;
  text-transform: uppercase;

  /* white */

  color: #FFFFFF;

}
@media screen and (max-width: 576px){
  .er_data .nf_button {
    top: unset;
  }
  .er_data h4 {
    font-size: 100px!important;
  }
  .er_data p {
    font-size: 24px;
  }
}
</style>