<template>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">


  <div class="containerMobile mobile">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">


      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <div  class="s_card hovering">
            <img src="../assets/SLayer1.svg" alt="">
            <h4 class="s_title">{{Service_title}}</h4>
            <p class="s_text" v-html="Service_description"></p>
            <p class="price">{{Service_time}} | {{Service_price}}</p>
            <a class="nf_button cr_b" target="_blank" :href="Service_book_link" >BOOK NOW</a>
          </div>

        </div>

        <div class="item">
          <div  class="s_card hovering">
            <img src="../assets/SLayer2.svg" alt="">
            <h4 class="s_title">{{Service_title1}}</h4>
            <p class="s_text" v-html="Service_description1"></p>
            <p class="price">{{Service_time1}} | {{Service_price1}}</p>
            <a class="nf_button cr_b" target="_blank" :href="Service_book_link1" >BOOK NOW</a>
          </div>
         </div>

        <div class="item">
          <div  class="s_card hovering">
            <img src="../assets/SLayer3.svg" alt="">
            <h4 class="s_title">{{Service_title2}}</h4>
            <p class="s_text" v-html="Service_description2"></p>
            <p class="price">{{Service_time2}} | {{Service_price2}}</p>
            <a class="nf_button cr_b" target="_blank" :href="Service_book_link2" >BOOK NOW</a>
          </div>
        </div>

        <div class="item ">
          <div  class="s_card hovering">
            <img src="../assets/SLayer4.svg" alt="">
            <h4 class="s_title">{{Service_title3}}</h4>
            <p class="s_text" v-html="Service_description3"></p>
            <p class="price">{{Service_time3}} | {{Service_price3}}</p>
            <a class="nf_button cr_b" target="_blank" :href="Service_book_link3" >BOOK NOW</a>
          </div>
        </div>

        <div class="item">
          <div  class="s_card hovering">
            <img src="../assets/SLayer5.svg" alt="">
            <h4 class="s_title">{{Service_title4}}</h4>
            <p class="s_text" v-html="Service_description4"></p>
            <p class="price">{{Service_time4}} | {{Service_price4}}</p>
            <a class="nf_button cr_b" target="_blank" :href="Service_book_link4" >BOOK NOW</a>
          </div>

        </div>

        <div class="item">
          <div  class="s_card hovering">
            <img src="../assets/SLayer6.svg" alt="">
            <h4 class="s_title">{{Service_title5}}</h4>
            <p class="s_text" v-html="Service_description5"></p>
            <p class="price">{{Service_time5}} | {{Service_price5}}</p>
            <a class="nf_button cr_b" target="_blank" :href="Service_book_link5" >BOOK NOW</a>
          </div>
        </div>
      </div>


      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>



</template>

<script>
import axios from "axios";

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import {gsap} from "gsap";


export default {
  name: "NFServicesMobile.vue" ,
  data: () => ({
    currSlide: 2,
    slide: 0,
    sliding: null,

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
  created() {
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

  }
}
</script>

<style >
.carousel-control.right {

  right: 30px!important;
  top: 100%;
  z-index: 999999999999;
  opacity: 1;
  content: url("../assets/next.svg");
}
.carousel-control.left {

  left: 50%;
  top: 100%;
  z-index: 999999999999;
  opacity: 1;
  content: url("../assets/prev.svg");
}
.carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right, .carousel-control .icon-next, .carousel-control .icon-prev {
  top: 100%;
  margin-top: 0;
}

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
    padding-top: 200%;
  }





}
@media screen and (min-width: 576px) {
  .mobile {
    display: none!important;
  }
}




@keyframes tonext {
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
}



/** {*/
/*  box-sizing: border-box;*/
/*  scrollbar-color: transparent transparent; !* thumb and track color *!*/
/*  scrollbar-width: 0px;*/
/*}*/

/**::-webkit-scrollbar {*/
/*  width: 0;*/
/*}*/

/**::-webkit-scrollbar-track {*/
/*  background: transparent;*/
/*}*/

/**::-webkit-scrollbar-thumb {*/
/*  background: transparent;*/
/*  border: none;*/
/*}*/

/** {*/
/*  -ms-overflow-style: none;*/
/*}*/

ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  /*padding-top: 75%;*/
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
}

.carousel__viewport {
  padding-left: 15px;
  padding-bottom: 100px;
  position: absolute;
  top: 250px;
  right: 0;
  bottom: 0;
  left: 0;
  height: fit-content;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;

  counter-increment: item;
}


/*.carousel__slide:before {*/
/*  content: counter(item);*/
/*  position: absolute;*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  transform: translate3d(-50%,-40%,70px);*/
/*  color: #fff;*/
/*  font-size: 2em;*/
/*}*/

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
}

@media (hover: hover) {
  .carousel__snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .carousel__slide:last-child .carousel__snapper {
    animation-name: tostart, snap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__snapper {
    animation-name: none;
  }
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
  animation-name: none;
}





.carousel::before,
.carousel::after,
.carousel__prev,
.carousel__next {
  position: absolute;
  bottom: -20%;
  margin-top: 37.5%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  outline: 0;
}

.carousel::before,
.carousel__prev {
  left: -1rem;
  z-index: 7;
  content: url("../assets/prev.svg");

  margin-left: 50%;
}

.carousel::after,
.carousel__next {
  right: -1rem;
  z-index: 7;
  content: url("../assets/next.svg");
  margin-right: 12%;
}

.carousel::before,
.carousel::after {
  content: '';
  z-index: 1;
  background-color: #333;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}


</style>