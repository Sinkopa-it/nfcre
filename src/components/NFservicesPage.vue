<template>
<div class="services_container"

>
  <div class="row pl_60 pr_60 pt_100" >
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <h2>Services</h2>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 serv_page_title">
      separately, in bundles or all-in-one
    </div>
  </div>

  <n-f-services-mobile></n-f-services-mobile>
  <div class="services_cards_container non_mobile row pl_60 pr_60">

    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4"
         @mouseover="teamHover('s_card_1')"
         @mouseout="teamLeave('s_card_1')"
    >
      <div id="s_card_1" class="s_card"

      >
        <img src="../assets/SLayer1.svg" alt="">

        <h4 class="s_title">{{Service_title}}</h4>
        <p class="s_text" v-html="Service_description"></p>
        <div class="row hov_vis">
          <div class="col-6"> <p class="price">{{Service_time}} | {{Service_price}}</p></div>
          <div class="col-6">  <a class="nf_button cr_b" target="_blank" :href="Service_book_link" >BOOK NOW</a></div>
        </div>

      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4"
         @mouseover="teamHover('s_card_2')"
         @mouseout="teamLeave('s_card_2')"
    >
      <div id="s_card_2" class="s_card center_card"

      >
        <img src="../assets/SLayer2.svg" alt="">
        <h4 class="s_title">{{Service_title1}}</h4>
        <p class="s_text" v-html="Service_description1"></p>
        <div class="row hov_vis">
          <div class="col-6"> <p class="price">{{Service_time1}} | {{Service_price1}}</p></div>
          <div class="col-6">  <a class="nf_button cr_b" target="_blank" :href="Service_book_link1" >BOOK NOW</a></div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4"
         @mouseover="teamHover('s_card_3')"
         @mouseout="teamLeave('s_card_3')"
    >
      <div id="s_card_3" class="s_card mr"

      >
        <img src="../assets/SLayer3.svg" alt="">
        <h4 class="s_title">{{Service_title2}}</h4>
        <p class="s_text" v-html="Service_description2"></p>
        <div class="row hov_vis">
          <div class="col-6"> <p class="price">{{Service_time2}} | {{Service_price2}}</p></div>
          <div class="col-6">  <a class="nf_button cr_b" target="_blank" :href="Service_book_link2" >BOOK NOW</a></div>
        </div>
      </div>
    </div>
  </div>
  <div class="services_cards_container non_mobile row pl_60 pr_60">
    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4"
         @mouseover="teamHover('s_card_4')"
         @mouseout="teamLeave('s_card_4')"
    >
      <div id="s_card_4" class="s_card"

      >
        <img src="../assets/SLayer4.svg" alt="">
        <h4 class="s_title">{{Service_title3}}</h4>
        <p class="s_text" v-html="Service_description3"></p>
        <div class="row hov_vis">
          <div class="col-6"> <p class="price">{{Service_time3}} | {{Service_price3}}</p></div>
          <div class="col-6">  <a class="nf_button cr_b" target="_blank" :href="Service_book_link3" >BOOK NOW</a></div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4"
         @mouseover="teamHover('s_card_5')"
         @mouseout="teamLeave('s_card_5')"
    >
      <div id="s_card_5" class="s_card center_card"

      >
        <img src="../assets/SLayer5.svg" alt="">
        <h4 class="s_title">{{Service_title4}}</h4>
        <p class="s_text" v-html="Service_description4"></p>
        <div class="row hov_vis">
          <div class="col-6"> <p class="price">{{Service_time4}} | {{Service_price4}}</p></div>
          <div class="col-6">  <a class="nf_button cr_b" target="_blank" :href="Service_book_link" >BOOK NOW</a></div>
        </div>

      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4"
         @mouseover="teamHover('s_card_6')"
         @mouseout="teamLeave('s_card_6')"
    >
      <div id="s_card_6" class="s_card mr"

      >
        <img src="../assets/SLayer6.svg" alt="">
        <h4 class="s_title">{{Service_title5}}</h4>
        <p class="s_text" v-html="Service_description5"></p>
        <div class="row hov_vis">
          <div class="col-6"> <p class="price">{{Service_time5}} | {{Service_price5}}</p></div>
          <div class="col-6">  <a class="nf_button cr_b" target="_blank" :href="Service_book_link5" >BOOK NOW</a></div>
        </div>
      </div>
    </div>
  </div>



  <!--footer-->
  <n-f-footer></n-f-footer>


</div>
</template>

<script>
import NFFooter from '../components/NFFooter.vue';
import NFServicesMobile from '../components/NFServicesMobile.vue';
import axios from "axios";


export default {
  components: {
    NFFooter,
    NFServicesMobile
  },
  name: "NFservicesPage.vue",
  data: () => ({
    currSlide: 2,

    Service_title: null,
    Service_description: null,
    Service_time: null,
    Service_price: null,
    Service_book_link: null,

    Service_title1: null,
    Service_description1: null,
    Service_time1: null,
    Service_price1: null,
    Service_book_link1: null,

    Service_title2: null,
    Service_description2: null,
    Service_time2: null,
    Service_price2: null,
    Service_book_link2: null,

    Service_title3: null,
    Service_description3: null,
    Service_time3: null,
    Service_price3: null,
    Service_book_link3: null,

    Service_title4: null,
    Service_description4: null,
    Service_time4: null,
    Service_price4: null,
    Service_book_link4: null,

    Service_title5: null,
    Service_description5: null,
    Service_time5: null,
    Service_price5: null,
    Service_book_link5: null,

  }),
  beforeCreate() {
    axios.get("https://cockpit.nfcreators.io/api/collections/entries/Services")
        .then(response => {

          this.Service_title = response.data.entries[0].Service_title;
          this.Service_description = response.data.entries[0].Service_description;
          this.Service_time = response.data.entries[0].Service_time;
          this.Service_price = response.data.entries[0].Service_price;
          this.Service_book_link = response.data.entries[0].Service_book_link;

          this.Service_title1 = response.data.entries[1].Service_title;
          this.Service_description1 = response.data.entries[1].Service_description;
          this.Service_time1 = response.data.entries[1].Service_time;
          this.Service_price1 = response.data.entries[1].Service_price;
          this.Service_book_link1 = response.data.entries[1].Service_book_link;

          this.Service_title2 = response.data.entries[2].Service_title;
          this.Service_description2 = response.data.entries[2].Service_description;
          this.Service_time2 = response.data.entries[2].Service_time;
          this.Service_price2 = response.data.entries[2].Service_price;
          this.Service_book_link2 = response.data.entries[2].Service_book_link;

          this.Service_title3 = response.data.entries[3].Service_title;
          this.Service_description3 = response.data.entries[3].Service_description;
          this.Service_time3 = response.data.entries[3].Service_time;
          this.Service_price3 = response.data.entries[3].Service_price;
          this.Service_book_link3 = response.data.entries[3].Service_book_link;

          this.Service_title4 = response.data.entries[4].Service_title;
          this.Service_description4 = response.data.entries[4].Service_description;
          this.Service_time4 = response.data.entries[4].Service_time;
          this.Service_price4 = response.data.entries[4].Service_price;
          this.Service_book_link4 = response.data.entries[4].Service_book_link;

          this.Service_title5 = response.data.entries[5].Service_title;
          this.Service_description5 = response.data.entries[5].Service_description;
          this.Service_time5 = response.data.entries[5].Service_time;
          this.Service_price5 = response.data.entries[5].Service_price;
          this.Service_book_link5 = response.data.entries[5].Service_book_link;
        });
  },
  methods: {
    teamHover: function (n) {
      document.getElementById(n).classList.add('hovering');
    },
    teamLeave: function (n) {
      document.getElementById(n).classList.remove('hovering');
      document.getElementById(n).classList.add('hoverLeave');
    },
    navclick: function(n) {
      this.$router.push(n)
    }


  },

}
</script>

<style >
.serv_page_title {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 120%;
  /* identical to box height, or 34px */
  text-align: right;
  text-transform: uppercase;
  padding-top: 25px;
  /* white */

  color: #FFFFFF;

}
.services_cards_container {
  height: 475px;
}
.center_card {
  margin-top: 15%;
  margin-left: auto;
  margin-right: auto;
}
.s_card {
  position: relative;
  background: rgba(1, 0, 42, 0.7);
  height: 375px;
  border: 2px solid #4BDF15;
  transition: .3s;
  z-index: 3;
  max-width: 85%;
}
.s_card.hovering {
  height:fit-content;
  min-height: 450px;
  z-index: 13;
  max-width: 100%;
  background: rgba(1, 0, 42, 0.9);
}
.s_card.hoverLeave img {
  -webkit-animation: fadeOut 0.7s ;
}
.s_card.hovering img {
  opacity: 1;
  -webkit-animation: fadeIn 1s ;
  height: 100px;
  position: absolute;
  width: 100px;
  right: -50px;
  top: -50px;
  display: block;
}

.s_card img {

  opacity: 0;
  height: 100px;
  position: absolute;
  width: 100px;
  right: -50px;
  top: -50px;
  display: block;

}
.s_title {
  font-family: 'Rubik',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 43px;
  vertical-align: middle;
  color: #FFFFFF;
  height: 100%;
  display: grid;
  padding: 0 30px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
}
.hovering .s_title {
  padding-top: 40px;
  height: fit-content;
  display: block;
}

.hovering .hov_vis {
  display: flex;
  padding-bottom: 16px;
}
.hov_vis {
  display: none;
}
.hovering .s_text {
  display: block;
}
.s_text {
  font-family: 'Rubik',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  display: none;
  /* white */
  padding: 20px 48px;
  color: #FFFFFF;
}
.mr {
  margin-left: auto;

}
.footer_container .row .col-sm-12 col-md-12 col-lg-4 col-xl-4, .footer_container .row .col-lg-4, .footer_container .row .col-xl-4{
  margin-top: 0!important;
  padding-top:0!important;
}
.footer_navs_container a:hover {
  color: #4BDF15!important;
}
.footer_navs_container a {
  color: #FFFFFF!important;
  cursor: pointer;
  z-index: 4444444;
}
.services_container {background-image: url("../assets/serbg.png");
padding-top: 80px;
margin-top: -80px;
  background-size: cover;
}
@media (min-width: 1026px) {
  .services_cards_container .col-md-12 {
    width: 33%;
  }
}

.pt_100 {
  padding-top: 100px;
  padding-bottom: 60px;
}
.col-sm-12 col-md-12 col-lg-4 col-xl-4, .col-lg-4, .col-xl-4 {
  margin-top: -40px;
  padding-top: 50px;
}
@media screen and (max-width: 576px) {
  .non_mobile {
    display: none!important;
  }
  .services_cards_container {
    display: flex;
    overflow: scroll;
    padding-top: 30px;
    height: unset;
  }
  .s_card .nf_button {
    top:unset;
    left: calc(50% - 70px);
  }
  .s_card {
    width: 90vw;
    margin-right: 30px;
    margin-top: 120px;
  }
  .s_card.hovering img {
    opacity: 1;
    -webkit-animation: fadeIn 1s;
    height: 56px;
    position: absolute;
    width: 56px;
    right: -25px;
    top: -31px;
    display: block;
  }
  .s_text {
    font-family: 'Rubik',sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    display: none;
    padding: 10px 20px;
    color: #FFFFFF;
  }
  .s_title {
    font-family: 'Rubik',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    vertical-align: middle;
    color: #FFFFFF;
    height: 100%;
    display: grid;
    padding: 20px 0 0 20px!important;
    text-align: left;
    text-transform: uppercase;
  }
  .price {
    text-align: left;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 500!important;
    font-size: 18px!important;
    line-height: 20px;
    padding: 10px 20px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  .pt_100 {
    padding-top: 40px;
    padding-bottom: 0;
  }
  .serv_page_title {
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 120%;
    text-align: left;
    text-transform: uppercase;
    padding-top: 0;
    color: #FFFFFF;
  }
  .footer_container {
    /*padding-top: 200%;*/
  }





}
@media screen and (min-width: 577px) and (max-width: 1025px) {
  .carousel-inner {
    height: 550px;
  }
  /*.s_card {*/
  /*  width: 33% !important;*/
  /*}*/
  .services_container .non_mobile{
    display: none!important;
  }
  .services_container .mobile{
    display: block!important;
  }

  .services_cards_container .col-sm-12 {
    width: 33%;
  }

  .s_card.hovering {
    min-height: 450px;
    width: 90%;
    margin-left: 20px;

    padding-bottom: 30px;
  }
  .carousel-inner>.item {
    margin-top: 50px;
  }
  .s_card.hovering .nf_button {
    top: 0!important;
    left: calc(50% - 50px);
    padding: 10px 10px 10px;
  }
  .carousel-control.left {
    left: 50%;
    top: 110%;
  }
  .carousel-control.right {
    right: 60px!important;
    top: 110%;
  }
  .carousel-inner {
    padding-bottom: 30px;
  }
  .s_title {
    padding: 20px 50px!important;
    font-size:26px!important;
  }
  .s_text {
    font-family: 'Rubik',sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;

    padding: 20px 50px;
    color: #FFFFFF;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .s_title {
    font-size: 26px;
    line-height: 110%;

  }
  .s_text {
    font-size: 16px;
    padding: 20px 20px;
  }
  .hov_vis .col-6 {
    width: 100%;
  }
  .hovering .hov_vis {
    display: flex;
    padding-bottom: 50px;
  }
}
</style>