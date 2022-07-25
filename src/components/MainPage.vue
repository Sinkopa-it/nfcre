<template>
  <div class="main_page_container">

    <div id="about"  class="section about_container ">

      <div class="about_opacity">
        <!--      nav tabs-->
        <div class="pl_60 d-flex align-items-start">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <div class="about_section row">
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 title_section">
                  <h2 >Project Info </h2>
                  <p class="text_section" v-html="project">
                  </p>

                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                  <a class="nf_button" @click="routeclick()" href="#">START NOW</a>
                  <p class="text_description_section" v-html="project_right">

                  </p>
                  <div class="nav mobile flex-column nav-pills" >
                    <button @click="moveBg2()" class="nav-link"  data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><img src="../assets/prev.svg" alt=""></button>

                    <button @click="moveBg1()" class="nav-link prev_tab"  data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">  <img src="../assets/next.svg" alt=""></button>
                    <!--                    <button @click="moveBg()" class="nav-link next_tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">-->
                    <!--                      <img src="../assets/prev.svg" alt=""></button>-->

                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <div class="about_section row">
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 title_section">
                  <h2>Our mission  </h2>
                  <p class="text_section" v-html="mission">
                  </p>

                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                  <a class="nf_button" @click="routeclick()" href="#">START NOW</a>

                  <p class="text_description_section" v-html="mission_right">
                  </p>
                  <div class="nav mobile flex-column nav-pills" >
                    <!--                    <button @click="moveBg1()" class="nav-link prev_tab"  data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">  <img src="../assets/prev.svg" alt=""></button>-->
                    <button @click="moveBg()" class="nav-link next_tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                      <img src="../assets/prev.svg" alt=""></button>
                    <button @click="moveBg2()" class="nav-link"  data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><img src="../assets/next.svg" alt=""></button>

                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <div class="about_section row">
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 title_section">
                  <h2>Our vision </h2>
                  <p class="text_section" v-html="vision"></p>

                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                  <a class="nf_button" @click="routeclick()" href="#">START NOW</a>
                  <p class="text_description_section" v-html="vision_right"></p>
                  <div class="nav mobile flex-column nav-pills" >
                    <button @click="moveBg1()" class="nav-link prev_tab"  data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">  <img src="../assets/prev.svg" alt=""></button>
                    <button @click="moveBg()" class="nav-link next_tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                      <img src="../assets/next.svg" alt=""></button>
                    <!--                <button @click="moveBg2()" class="nav-link"  data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Our vision</button>-->

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button @click="moveBg()" class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">About us</button>
            <button @click="moveBg1()" class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Our mission </button>
            <button @click="moveBg2()" class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Our vision</button>
          </div>
        </div>
        <!--      links-->
        <div class="pl_60 row d-flex links_container">
          <a class="discord" target="_blank" :href="discord"><img src="../assets/nfdiscord.svg" alt=""></a>
          <a target="_blank" :href="telegram"><img src="../assets/nftelegram.svg" alt=""></a>
        </div>
      </div>
    </div>
    <!--      creators-->

    <div id="creators"
         class="section creators_container"
    >
      <div class="creators_opacity">

        <div class="pl_60 row inner"

        >
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 can">
            <h2 class="title_pb">Creators</h2>
            <img id="astronaut" class="hscroll " src="../assets/austranaut.svg" alt="">
            <p class="regular_text_big pb_28" v-html="Creators_astronaut_text"></p>
            <a class="nf_button cr_b" target="_blank" :href="Platform">PLATFORM</a>
            <a class="nf_button wt_b" target="_blank" :href="discord">DISCORD</a>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 pr_60">
            <p class="regular_text" v-html="Creators_top_text">
            </p>
            <hr class="nf_hr">
            <p class="regular_text_small" v-html="Creators_bottom_text"></p>
          </div>
        </div>
        <!--        <n-fanimated></n-fanimated>-->
        <h3 id="text" class="text">
          <!--            @mousemove="animateText"-->


          <br>
          <br>
          <br>

        </h3>

      </div>
      <h2  class="title_pb pl_60">Main Features</h2>
      <!--    main features-->
      <div class="features_container"
           @mouseout="teamContainerLeave('f_card_1')"
           @mouseover="teamContainerHover('f_card_1')">
        <div id="f_card_1"
             @mouseover="teamHover('f_card_1')"
             @mouseleave="teamLeave('f_card_1')"
             class="f_card hoverFirst">
          <div id="f_card_inner_1"  class="f_card_inner">
            <p id="f_card_text_1" class="f_card_text">{{feature1}}</p>
          </div>
        </div>
        <div id="f_card_2"
             @mouseover="teamHover('f_card_2')"
             @mouseleave="teamLeave('f_card_2')"
             class="f_card">
          <div id="f_card_inner_2"  class="f_card_inner">
            <p id="f_card_text_2" class="f_card_text">{{feature2}}</p>
          </div>
        </div>
        <div id="f_card_3"
             @mouseover="teamHover('f_card_3')"
             @mouseleave="teamLeave('f_card_3')"
             class="f_card">
          <div id="f_card_inner_3"  class="f_card_inner">
            <p id="f_card_text_3" class="f_card_text">{{feature3}}</p>
          </div>
        </div>
      </div>
      <div id="services" class="row pt_150">
        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <h2 class="pl_60 title_pb">Services</h2>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <p class="regular_text" v-html="Services_text">
          </p>

        </div>
        <a @click="routeclick" class="see_all" href="#">See All <img src="../assets/Arrow_r_see.svg" alt=""></a>
      </div>
      <!--      slider-->
      <div class="slider_container non_mobile pl_60">
        <n-f-slider ></n-f-slider>
      </div>

      <n-f-services-mobile></n-f-services-mobile>

      <!--    roadmap-->
      <img id="float_planet_right" src="../assets/floatPlanet0.svg" alt="" class="float_planet_right">

      <div id="roadmap" class="section roadmap_container_ani">
        <h2 class="pl_60 pt_150 title_pb"
        >Roadmap</h2>

        <div class="roadmap_container pl_60 pr_60">

          <div id="r_card_1" class="road_card_container">
            <h4 class="r_card_title">{{Roadmap_title}}</h4>
            <p class="r_card_text" v-html="Roadmap_description"></p>
          </div>
          <div id="r_card_2" class="road_card_container road_card_container2">
            <h4 class="r_card_title">{{Roadmap_title1}}</h4>
            <p class="r_card_text" v-html="Roadmap_description1"></p> </div>
          <div id="r_card_3" class="road_card_container road_card_container3">
            <h4 class="r_card_title">{{Roadmap_title2}}</h4>
            <p class="r_card_text" v-html="Roadmap_description2"></p> </div>
          <div id="r_card_4" class="road_card_container">
            <h4 class="r_card_title">{{Roadmap_title3}}</h4>
            <p class="r_card_text" v-html="Roadmap_description3"></p> </div>
          <div id="r_card_5" class="road_card_container road_card_container2">
            <h4 class="r_card_title">{{Roadmap_title4}}</h4>
            <p class="r_card_text" v-html="Roadmap_description4"></p></div>
          <div id="r_card_6" class="road_card_container road_card_container3">
            <h4 class="r_card_title">{{Roadmap_title5}}</h4>
            <p class="r_card_text" v-html="Roadmap_description5"></p> </div>

        </div>

        <img id="float_planet_left" src="../assets/floatPlanet1.svg" alt="" class="float_planet_left">

        <!--      team-->

        <div  id="team" class="section row opacity pt_100 pl_60 pr_60 title_pb">
          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <h2>Team </h2>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <p class="regular_text" v-html="Team_text_top"></p>
          </div>
        </div>


        <div class="containerMobile mobile">
          <div id="myCarousel2" class="carousel slide" data-ride="carousel">


            <!-- Wrapper for slides -->
            <div class="carousel-inner">
              <div class="item active">
                <div class="t_card_container hoverFirst">
                  <div class="t_card_inner">
                    <hr class="moving_hr">
                    <div class="text_t_container">
                      <p class="tc_name">{{Person_name}}</p>
                      <p class="tc_position">{{Person_position}}</p>
                    </div>
                    <div class="tc_image" :style="`background-image: url(https://cockpit.nfcreators.io/${Person_image?.path}`" ></div>
                  </div>
                </div>

              </div>

              <div class="item">
                <div class="t_card_container hoverFirst">
                  <div class="t_card_inner">
                    <hr class="moving_hr">
                    <div class="text_t_container">
                      <p class="tc_name">{{Person_name1}}</p>
                      <p class="tc_position">{{Person_position1}}</p>
                    </div>
                    <div class="tc_image" :style="`background-image: url(https://cockpit.nfcreators.io/${Person_image1?.path}`" ></div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="t_card_container hoverFirst">
                  <div class="t_card_inner">
                    <hr class="moving_hr">
                    <div class="text_t_container">
                      <p class="tc_name">{{Person_name2}}</p>
                      <p class="tc_position">{{Person_position2}}</p>
                    </div>
                    <div class="tc_image" :style="`background-image: url(https://cockpit.nfcreators.io/${Person_image2?.path}`" ></div>
                  </div>
                </div>
              </div>





              <div class="item">
                <div class="t_card_container hoverFirst">
                  <div class="t_card_inner">
                    <hr class="moving_hr">
                    <div class="text_t_container">
                      <p class="tc_name">{{Person_name3}}</p>
                      <p class="tc_position">{{Person_position3}}</p>
                    </div>
                    <div class="tc_image" :style="`background-image: url(https://cockpit.nfcreators.io/${Person_image3?.path}`" ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel2" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel2" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

      </div>

      <div  class="team_container non_mobile opacity pl_60 pr_60"
            @mouseout="teamContainerLeave('t_card_1')"
            @mouseover="teamContainerHover('t_card_1')"
      >
        <div id="t_card_1"
             @mouseover="teamHover('t_card_1')"
             @mouseout="teamLeave('t_card_1')"
             class="t_card_container hoverFirst">

          <div class="t_card_inner">
            <hr class="moving_hr">
            <div class="text_t_container">
              <p class="tc_name">{{Person_name}}</p>
              <p class="tc_position">{{Person_position}}</p>
            </div>
            <div class="tc_image" :style="`background-image: url(https://cockpit.nfcreators.io/${Person_image?.path}`" ></div>
          </div>
        </div>
        <div id="t_card_2"
             @mouseover="teamHover('t_card_2')"
             @mouseout="teamLeave('t_card_2')"
             class="t_card_container">
          <div class="t_card_inner down">
            <hr class="moving_hr">
            <div class="text_t_container">
              <p class="tc_name">{{Person_name1}}</p>
              <p class="tc_position">{{Person_position1}}</p>
            </div>
            <div class="tc_image" :style="`background-image: url(https://cockpit.nfcreators.io/${Person_image1?.path}`" ></div>

          </div>
        </div>
        <div id="t_card_3"
             @mouseover="teamHover('t_card_3')"
             @mouseout="teamLeave('t_card_3')"
             class="t_card_container"
        >

          <div class="t_card_inner">
            <hr class="moving_hr">
            <div class="text_t_container">
              <p class="tc_name">{{Person_name2}}</p>
              <p class="tc_position">{{Person_position2}}</p>
            </div>
            <div class="tc_image" :style="`background-image: url(https://cockpit.nfcreators.io/${Person_image2?.path}`" ></div>
          </div>

        </div>
        <div id="t_card_4"
             @mouseover="teamHover('t_card_4')"
             @mouseout="teamLeave('t_card_4')"
             class="t_card_container">
          <div class="t_card_inner down">
            <hr class="moving_hr">
            <div class="text_t_container">
              <p class="tc_name">{{Person_name3}}</p>
              <p class="tc_position">{{Person_position3}}</p>
            </div>
            <div class="tc_image" :style="`background-image: url(https://cockpit.nfcreators.io/${Person_image3?.path}`" ></div>
          </div>
        </div>
      </div>
      <div class="pl_60 pr_60 row mob_mt_50">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6"><p class="regular_text" v-html="Team_text_left"></p></div>
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6"><p class="regular_text" v-html="Team_text_right"></p></div>
      </div>
      <!--      footer-->
      <n-f-footer></n-f-footer>
    </div>
  </div>
</template>

<script>

import NFSlider from '../components/NFSlider.vue';
import NFServicesMobile from '../components/NFServicesMobile.vue';
import NFFooter from '../components/NFFooter.vue';
import NFTeamMobile from '../components/NFTeamMobile.vue';
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "MainPage.vue",
  components: {
    NFFooter,
    NFSlider,
    NFTeamMobile,
    NFServicesMobile
  },
  data() {
    return {
      project: null,
      project_right: null,
      mission: null,
      mission_right: null,
      vision: null,
      vision_right: null,
      Creators_astronaut_text: null,
      Creators_top_text: null,
      Creators_bottom_text: null,
      feature1:null,
      feature2:null,
      feature3:null,
      Services_text:null,
      Roadmap_title: null,
      Roadmap_description: null,
      Roadmap_title1: null,
      Roadmap_description1: null,
      Roadmap_title2: null,
      Roadmap_description2: null,
      Roadmap_title3: null,
      Roadmap_description3: null,
      Roadmap_title4: null,
      Roadmap_description4: null,
      Roadmap_title5: null,
      Roadmap_description5: null,
      Team_text_top: null,
      Team_text_left: null,
      Team_text_right: null,
      Person_name: null,
      Person_position: null,
      Person_image: null,
      Person_name1:null,
      Person_position1:null,
      Person_image1:null,
      Person_name2:null,
      Person_position2:null,
      Person_image2:null,
      Person_name3:null,
      Person_position3:null,
      Person_image3:null,
      discord:null,
      telegram:null,
      Platform:null,

    }
  },
  beforeCreate() {


  },
  async beforeMount() {
   await axios.get("https://cockpit.nfcreators.io/api/collections/entries/About")
        .then(response => {
          this.project = response.data.entries[0].Project;
          this.project_right = response.data.entries[0].Project_right;
          this.vision = response.data.entries[0].Vision;
          this.vision_right = response.data.entries[0].Vision_right;
          this.mission = response.data.entries[0].Mission;
          this.mission_right = response.data.entries[0].Mission_right;
        });
    await axios.get("https://cockpit.nfcreators.io/api/collections/entries/Social_links")
        .then(response => {
          this.telegram = response.data.entries[0].Telegram;
          this.discord = response.data.entries[0].Discord;
          this.Platform = response.data.entries[0].Platform;


        });

   await axios.get("https://cockpit.nfcreators.io/api/collections/entries/CREATORS")
        .then(response => {
          this.Creators_astronaut_text = response.data.entries[0].creators_astronaut_text;
          this.Creators_top_text = response.data.entries[0].creators_top_text;
          this.Creators_bottom_text = response.data.entries[0].creators_bottom_text;
        });
   await axios.get("https://cockpit.nfcreators.io/api/collections/entries/Features")
        .then(response => {
          this.feature1 = response.data.entries[0].feature1;
          this.feature2 = response.data.entries[0].feature2;
          this.feature3 = response.data.entries[0].feature3;
        });
   await axios.get("https://cockpit.nfcreators.io/api/collections/entries/Services_text")
        .then(response => {
          this.Services_text = response.data.entries[0].Services_text;
        });
   await axios.get("https://cockpit.nfcreators.io/api/collections/entries/Roadmap")
        .then(response => {
          this.Roadmap_title = response.data.entries[0].roadmap_title;
          this.Roadmap_description = response.data.entries[0].roadmap_description;
          this.Roadmap_title1 = response.data.entries[1].roadmap_title;
          this.Roadmap_description1 = response.data.entries[1].roadmap_description;
          this.Roadmap_title2 = response.data.entries[2].roadmap_title;
          this.Roadmap_description2 = response.data.entries[2].roadmap_description;
          this.Roadmap_title3 = response.data.entries[3].roadmap_title;
          this.Roadmap_description3 = response.data.entries[3].roadmap_description;
          this.Roadmap_title4 = response.data.entries[4].roadmap_title;
          this.Roadmap_description4 = response.data.entries[4].roadmap_description;
          this.Roadmap_title5 = response.data.entries[5].roadmap_title;
          this.Roadmap_description5 = response.data.entries[5].roadmap_description;
        });
   await axios.get("https://cockpit.nfcreators.io/api/collections/entries/Team_texts")
        .then(response => {
          this.Team_text_top = response.data.entries[0].Team_text_top;
          this.Team_text_left = response.data.entries[0].Team_text_left;
          this.Team_text_right = response.data.entries[0].Team_text_right;
        });
   await axios.get("https://cockpit.nfcreators.io/api/collections/entries/Team")
        .then(response => {

          this.Person_name = response.data.entries[0].Person_name;
          this.Person_position = response.data.entries[0].Person_position;
          this.Person_image = response.data.entries[0].Person_image;

          this.Person_name1 = response.data.entries[1].Person_name;
          this.Person_position1 = response.data.entries[1].Person_position;
          this.Person_image1 = response.data.entries[1].Person_image;

          this.Person_name2 = response.data.entries[2].Person_name;
          this.Person_position2 = response.data.entries[2].Person_position;
          this.Person_image2 = response.data.entries[2].Person_image;

          this.Person_name3 = response.data.entries[3].Person_name;
          this.Person_position3 = response.data.entries[3].Person_position;
          this.Person_image3 = response.data.entries[3].Person_image;
        });
  },
  mounted() {


    ScrollTrigger.matchMedia({

      // desktop
      "(min-width: 800px)": function() {
        gsap.to('.hscroll', {
          xPercent: 100,
          ease: "none",
          duration: 0.8,
          scrollTrigger: {
            trigger: ".hscroll",
            start: "top center",
            end: "bottom top",
            scrub: true
          }
        });
        gsap.to(".float_planet_left", {
          yPercent: -40,
          ease: 5,
          scrollTrigger: {
            trigger: ".float_planet_left",
            scrub: true
          },
        });
        gsap.to(".float_planet_right", {
          yPercent: -70,
          ease: 5,
          scrollTrigger: {
            trigger: ".float_planet_right",
            scrub: true
          },
        });
        gsap.to(".road_card_container2", {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: ".road_card_container2",
            scrub: true,
          },
        });
        gsap.to(".road_card_container3", {
          yPercent: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: ".road_card_container3",
            scrub: true,
          },
        });

      }
    }), ScrollTrigger.create({

          trigger: ".text",
          markers: false,
          onEnter: () => {
            let element = document.getElementById("text");
            if (element.classList.contains("full_wide_title")) {
            } else {
              element.classList.add("full_wide_title");
              element.innerHTML = "<span>By</span> <span>creators,</span> <span>for</span> <span>communities!</span>";
            }
          }
        });
    const sections = document.querySelectorAll(".section");
    const navLi = document.querySelectorAll(".navs_container a");
    // const floatAnimation = () => {
    //   const tlCan = new TimelineMax({repeat: -1});
    //   /*Can Animation*/
    //   tlCan
    //       //move top left
    //       .to('.can > img', 3, {y: '-=30', x: '+=20', rotation: '-=5', ease: Power1.easeInOut})
    //       //move down right
    //       .to('.can > img', 2, {y: '+=30', x: '-=20', rotation: '-=5', ease: Power1.easeInOut})
    //       .to('.can > img', 3, {y: '-=20', rotation: '+=5', ease: Power1.easeInOut})
    //       .to('.can > img', 3, {y: '+=20', rotation: '+=5', ease: Power1.easeInOut})
    //   TweenLite.to(tlCan, 1, {ease: Power1.easeInOut})
    // }
    // floatAnimation();


  },
  created() {

  },
  methods: {
    manualscroll: function() {

      console.log("asdfda")
    },
    moveBg: function () {
      document.getElementById("about").style.backgroundPositionX = '0';
      document.getElementById("v-pills-home-tab").classList.add("active");
      document.getElementById("v-pills-messages-tab").classList.remove("active");
      document.getElementById("v-pills-profile-tab").classList.remove("active");

    },
    moveBg1:function () {
      document.getElementById("about").style.backgroundPositionX = '-150px';
      document.getElementById("v-pills-home-tab").classList.remove("active");
      document.getElementById("v-pills-messages-tab").classList.remove("active");
      document.getElementById("v-pills-profile-tab").classList.add("active");
    },
    moveBg2:function () {
      document.getElementById("v-pills-messages-tab").classList.add("active");
      document.getElementById("v-pills-profile-tab").classList.remove("active");
      document.getElementById("v-pills-home-tab").classList.remove("active");
      document.getElementById("about").style.backgroundPositionX = '-300px';

    },
    featHover: function (n) {
      document.getElementById("f_card_inner_" + n).style.height = '148px';
    },
    featLeave: function (n) {
      document.getElementById("f_card_inner_" + n).style.height = '280px';
    },
    teamContainerHover: function(n) {
      document.getElementById(n).classList.remove('hoverFirst');
    },
    teamContainerLeave: function(n) {
      document.getElementById(n).classList.add('hoverFirst');
    },

    teamHover: function (n) {
      document.getElementById(n).classList.add('hovering');
    },
    teamLeave: function (n) {
      document.getElementById(n).classList.remove('hovering');
    },
    routeclick: function() {
      this.$router.push('/services')
    }
  }
}

</script>
<style>
.inner .nf_button {
  text-decoration: none!important;
}
.regular_text_small strong {
  font-weight: 400;
  text-transform: uppercase;
}
hr {
  border-top: none!important;
}

@media screen and (max-width:576px)  {
  .regular_text_small {
    font-size: 14px!important;
  }

  .about_section p {
    font-size: 14px!important;
  }
  #text {
    height: 200px!important;
  }

    #team div .regular_text{
      font-size: 16px!important;
    }
  .mob_mt_50 {
    margin-top: 50px;
  }
  h3.full_wide_title {
    font-weight: 300!important;
    font-size: 28px!important;
    line-height: 33px!important;
    letter-spacing: 0.1em;
    padding-top: 20px!important;
  }
  .hoverFirst .t_card_inner {
    height: 430px;
    margin-right: 20px;
  }
  .text_t_container {
    height: 73px;
  }

  h2 {
    font-size: 40px!important;
  }
  .title_pb {
    font-size: 40px!important;
  }
  .tc_image {
    background-size: cover;
    height: 370px;
  }
  #myCarousel2 {

  }
  .carousel-inner {
    /* padding-left: 15px; */
    padding-top: 15px;
  }
  .carousel-inner>.item {
    padding-bottom: 50px;
    margin-left: 15px;
  }
  .hoverFirst .t_card_inner {

    -webkit-animation: none!important;
  }
  .carousel-control.right {

    right: 30px!important;

    z-index: 999999999999;
    opacity: 1;
    content: url("../assets/next.svg");
  }
  .carousel-control.left {

    left: 50%!important;

    z-index: 999999999999;
    opacity: 1;
    content: url("../assets/prev.svg");
  }
  .carousel::before, .carousel::after {

     background-color: transparent!important;
  }
  .carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right, .carousel-control .icon-next, .carousel-control .icon-prev {
    top: 100%;
    margin-top: 0;
  }




}


@keyframes tonext {
  50% {
    left: 0;
    top:0;
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

.fade {
  opacity: 1!important;
}


.hoverFirst #f_card_inner_1::before {
  content: url("../assets/planet1.svg");
  /*height: 240px;*/
  /*width: 240px;*/
  position: absolute;
  left: 26%;
  top: -180px;
  transform: translateZ(-1px);
  /*-webkit-animation: fadeIn .5s;*/
  animation-name: fadeIn;
  animation-duration: 1s; /* or: Xms */
  animation-direction: alternate; /* or: normal */
  animation-timing-function: ease-out; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
  animation-fill-mode: forwards; /* or: backwards, both, none */
}
.hovering #f_card_inner_1::before  {
  content: url("../assets/planet1.svg");
  /*height: 240px;*/
  /*width: 240px;*/
  position: absolute;
  left: 26%;
  top: -180px;
  transform: translateZ(-1px);
  /*-webkit-animation: fadeIn .5s;*/
  animation-name: fadeIn;
  animation-duration: 1s; /* or: Xms */
  animation-direction: alternate; /* or: normal */
  animation-timing-function: ease-out; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
  animation-fill-mode: forwards; /* or: backwards, both, none */
}
.hovering #f_card_inner_2::before {
  content: url("../assets/planet2.svg");
  /*height: 240px;*/
  /*width: 240px;*/
  position: absolute;
  left: 26%;
  top: -180px;
  transform: translateZ(-1px);
  -webkit-animation: fadeIn .5s;
  /*-webkit-animation: fadeIn .5s;*/
  animation-name: fadeIn;
  animation-duration: 1s; /* or: Xms */
  animation-direction: alternate; /* or: normal */
  animation-timing-function: ease-out; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
  animation-fill-mode: forwards; /* or: backwards, both, none */
}
.hovering #f_card_inner_3::before  {
  content: url("../assets/planet3.svg");
  /*height: 240px;*/
  /*width: 240px;*/

  position: absolute;
  left: 26%;
  top: -180px;
  transform: translateZ(-1px);
  /*-webkit-animation: fadeIn .5s;*/
  animation-name: fadeIn;
  animation-duration: 1s; /* or: Xms */
  animation-direction: alternate; /* or: normal */
  animation-timing-function: ease-out; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
  animation-fill-mode: forwards; /* or: backwards, both, none */

}
@keyframes fadeIn {

  0% {
    -webkit-opacity:0;
    opacity:0;
    -webkit-transform: scale(0.1) translateZ(-1px);
    transform: scale(0.1) translateZ(-1px);
  }
  100% {
    -webkit-opacity:1;
    opacity:1;
    -webkit-transform: scale(1) translateZ(-1px);
    transform: scale(1) translateZ(-1px);
  }
}

@keyframes fadeOut {
  0% {opacity:1;
    transform: translateZ(-1px);
  }
  100% {opacity:0;
    transform:  translateZ(-1px);

  }
}


/*@-moz-keyframes fadeIn {*/
/*  0% {opacity:0;*/
/*   height: 0;*/
/*     width: 0;*/
/*  }*/
/*  100% {opacity:1;*/
/*    height: 240px;*/
/*     width: 240px;*/
/*  }*/
/*}*/

/*@-webkit-keyframes fadeIn {*/
/*  0% {opacity:0;*/
/*   height: 0;*/
/*   width: 0;}*/
/*  100% {opacity:1;*/
/*    height: 240px;*/
/*   width: 240px;}*/
/*}*/

/*@-o-keyframes fadeIn {*/
/*  0% {opacity:0;*/
/*   height: 0;*/
/*   width: 0;}*/
/*  100% {opacity:1;*/
/*    height: 240px;*/
/*   width: 240px;}*/
/*}*/

/*@-ms-keyframes fadeIn {*/
/*  0% {opacity:0;*/
/*   height: 0;*/
/*   width: 0;}*/
/*  100% {opacity:1;*/
/*    height: 240px;*/
/*   width: 240px;}*/
/*}*/

.about_container {
  height: 100vh;
  color: white!important;
  background: url("../assets/bg_about.png");
  margin-top: -80px;
  padding-top: 80px;
  transition: all .8s;
  background-size: cover;
}

.about_opacity {
  height: calc(100vh - 80px);
  background: rgba(1, 0, 42, 0.7);
}
.about_section p {
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */


  /* white */

  color: #FFFFFF;
}
.pl_60 {
  padding-left: 60px;
}
.pr_60 {
  padding-right: 60px;
}
.pt_150 {
  padding-top: 150px;
}
.pt_100 {
  padding-top: 100px;
}

.title_pb {
  padding-bottom: 60px;
}
.opacity {
  /*background: rgba(1, 0, 42, 0.7);*/
}
.text_description_section {
  padding-top: 222px;
  padding-right: 72px;
}
.tab-content {
  width: 70%;
}
.nav-pills {
  width: 30%;
  height: calc(100vh - 80px);
}
.title_section {
  padding-right: 36px;
}
h2 {
  z-index: 3;
  position: relative;
}
.title_section h2 {
  padding-bottom: 40px;
  padding-top: 60px;
}
.nav-link{
  color: #fff;
  background: #01002A!important;
  height: 33.3%!important;
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 47px;
  /* identical to box height */

  text-align: center;

  /* white */
}
p {
  /*font-family: 'Rubik', sans-serif!important;*/
  /*font-style: normal;*/
  /*font-weight: 400;*/
  /*font-size: 16px;*/
  /*line-height: 140%;*/
  /* or 22px */
  color: #FFFFFF;
}
.active {
  background-size: cover!important;
}
#v-pills-profile-tab.active {
  background: url("../assets/nf_vision.png")!important;
  background-size: cover!important;
  background-position: center;
}
#v-pills-messages-tab.active {
  background: url("../assets/nf_mission.png")!important;
  background-size: cover!important;
  background-position: center;
}
#v-pills-home-tab.active {
  background: url("../assets/nf_about.png")!important;
  background-size: cover!important;
  background-position: center;
}
.links_container {
  width: 25%;
  margin-top: -80px;
}

.links_container a img{
  height: 28px;
}
.links_container a {
  width: 50px;
  display: flex;
  animation: float 5s ease-in-out infinite;
}
.links_container a.discord {
  animation-delay: 1s!important;
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
.creators_container {
  padding-top: 160px;
  background: url("../assets/bg.svg")!important;
  background-repeat: no-repeat;
  background-size: cover!important;
  background-position: center!important;
}
.regular_text {
  color: white!important;

}
.nf_hr {
  color:#4BDF15;
  height: 2px!important;
  opacity: 1;
  width: 65%;
}
.creators_container li {
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
}
h3.full_wide_title {
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  line-height: 85px;
  text-transform: uppercase;
  padding-top: 80px;
  /*padding-bottom: 160px;*/
}
.features_container {
  display: flex;
  height: 280px;
}
.f_card {
  width: calc(100% / 3);
  display: flex;
  height: 100%;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  transition: .5s;
  position: relative;
}

.hoverFirst .f_card_inner {
  height: 148px!important;
  padding: 0;
}
.hovering .f_card_inner {
  height: 148px;
  padding: 0;
}
.f_card_inner {
  padding-TOP: 90px;
  transform-style: preserve-3d;
  background: rgba(1, 0, 42, 0.6);
  height: 100%;
  width: 100%;
  display: inline-block;
  align-self: flex-end;
  transition: .5s;
}
.hoverFirst .f_card_text {
  font-size: 36px;
  line-height: 120%;
  /* or 43px */
  padding: 6% 10%;
}
.hovering .f_card_text {
  font-family: 'Rubik',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 120%;
  /* or 43px */
  padding: 6% 0;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
}
.f_card {
  transition: all .5s;
}
.hoverFirst.f_card:before,.f_card.hovering:before {
  transition: all 1.5s;
  border: 0 solid transparent;
  content: '';
  height: 0;
  position: absolute;
  width: 30%;
  border-top: 2px solid #4BDF15;
  left: 0;
  top: 0;
}
.row {
  max-width: 100%;
}
.hoverFirst.f_card:after, .f_card.hovering:after {
  transition: all 1.5s;
  border: 0 solid transparent;

  content: '';
  height: 0;
  position: absolute;
  width: 30%;
  border-bottom: 2px solid #4BDF15;
  bottom: 0;
  right: 0;
}
.f_card_text {

  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 160%;
  /* or 32px */
  padding: 0 25%;
  /*display: flex;*/
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;

}
.team_container {
  display: flex;
  height: 560px;
  justify-content: space-between;
  margin-bottom: 60px;
}
.t_card_container {
  width: calc(25% - 15px);
  display: flex;

}
.t_card_inner {
  background: rgba(1, 0, 42, 0.6);
  height: 320px;
  width: 100%;
  -webkit-filter: brightness(40%);
  /*transition:all 1.5s;*/
  overflow: hidden;
  z-index: 10;
}
.hoverFirst .t_card_inner {
  height:560px ;
  -webkit-filter: brightness(100%);
  align-self: flex-start;
  -webkit-animation: heightIn 1.5s;
}
.hovering .t_card_inner {
  height:560px ;
  -webkit-filter: brightness(100%);
  -webkit-animation: heightIn 1.5s;
}
@keyframes heightIn {
  0% {
    height: 320px;
  }
  100% {
    height:560px;
  }
}

.t_card_inner hr {
  -webkit-filter: brightness(100%);
  z-index: 99999;
}
.hoverFirst .moving_hr {
  right: 0;
  position: absolute;
}
.hovering .moving_hr {
  right: 0;
  position: absolute;
}
.moving_hr {
  height: 1px;
  color: #4BDF15;
  width: 40%;
  margin: 0;
  border: 0;
  opacity: 1;
  z-index: 20;
  -webkit-filter: brightness(100%);
}
.down {
  width: 100%;
  display: inline-block;
  align-self: flex-end;
}
.shadow {
  background: rgba(1, 0, 42, 0.6);
  width: 100%;
  height: fit-content;
  z-index: 19;
}
.text_t_container {
  height: 80px;
  padding-left: 10px;
  padding-top: 18px;
}
.tc_name {
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin: 0;
}
.tc_position {
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #4BDF15;
  margin: 0;
}
.tc_image {
  background-position: top;
  background-size: cover;

  height: 560px;
}

.footer_container {
  padding-top: 200px;
  padding-bottom: 60px;
}
.float_planet_right {
  position: absolute;
  right: 0;
}
.float_planet_left {
  position: absolute;
  left: 0;
  z-index: 1;
}
.roadmap_container {
  display: flex;
  flex-wrap: wrap;
}
.road_card_container {
  background: rgba(1, 0, 42, 0.8);
  height: 280px;
  border: 2px solid #4BDF15;
  flex-grow: 3;
  color:#fff;
  width: calc(100%/3);
  margin-bottom: 20px;
  padding: 80px 24px;
  position: relative;
  /*-webkit-transform: translate3d(0,0,0);*/

}
.road_card_container:after {
  content: url("../assets/Arrow_road.svg");
  position: absolute;
  margin-left: -24px;
  bottom: -15px;
}

.r_card_title {
  margin-bottom:19px;
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
  text-transform: uppercase;

  /* white */

  color: #FFFFFF;

}
.r_card_text {
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */


  /* white */

  color: #FFFFFF;
}
#r_card_2 {margin-left: -50px;
  margin-top: 108px;
  z-index: 3;
}
#r_card_5 {margin-left: -50px;
  margin-top: 108px;
  z-index: 3;
}
#r_card_3 {margin-left: -50px;
  margin-top: 216px;
  z-index: 4;}
#r_card_6 {margin-left: -50px;
  margin-top: 216px;
  z-index: 4;}
#r_card_4{
  margin-top: -200px;
}
#r_card_5 {
  margin-top: -100px;
}
#r_card_6 {
  margin-top:10px;
}
.nf_button_wt {
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  background: rgba(1, 0, 42, 0.6);
  height: 48px;
  width: 180px;
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  border: none;
  outline: none;
  padding: 12px 35px 12px;
  position: relative;
}
.nf_button_cr {
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  background: rgba(1, 0, 42, 0.6);
  height: 48px;
  width: 180px;
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #4BDF15;
  border: none;
  outline: none;
  padding: 12px 35px 12px;
  position: relative;
}
.nf_button {
  /*position: absolute;*/
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  background: rgba(1, 0, 42, 0.6);
  height: 48px;
  width: 180px;
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #4BDF15;
  border: none;
  outline: none;
  padding: 12px 35px 12px;
  position: relative;
  left:calc(100% - 252px);
  top: 90px;
}
.nf_button:hover {
  background: rgba(1, 0, 42, 0.7);
  color: #4BDF15;
}

.nf_button:before,
.nf_button:after {
  border: 0 solid transparent;
  transition: all 0.5s;
  content: '';
  height: 0;
  position: absolute;
  width: 50%;
}
.wt_b:after {
  border-bottom: 2px solid #FFFFFF!important;
}
.wt_b:before {
  border-top: 2px solid #FFFFFF!important;
}
.nf_button:before {
  border-top: 2px solid #4BDF15;
  left: 0;
  top: -2px;
}
.nf_button:hover:before {
  left: 50%;
}
ol, ul {
  padding-left: 1rem;
}
b, strong {
  font-weight: 500;
}
.pb_28 {
  padding-bottom: 28px;
}
.nf_button:after {
  border-bottom: 2px solid #4BDF15;
  bottom: -2px;
  right: 0;
}
.nf_button:hover:after {
  right: 50%;
}
.cr_b{
  left:0;
  top: 0;
}
.wt_b{
  left:0;
  top: 0;
}
.wt_b {
  color: #fff!important;
  margin-left: 20px;
}

.full_wide_title {
  text-align: center;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  transform: scale(0.94);
  animation: scale 5s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}

.full_wide_title span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

.full_wide_title span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.full_wide_title span:nth-child(2) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.full_wide_title span:nth-child(3) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.full_wide_title span:nth-child(4) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
#text {
  height: 325px;
}
.see_all:hover{
  color: #4BDF15;
}
.see_all {
  cursor: pointer;
  text-align: end;
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-decoration: none;
  color: #4BDF15;
}
.see_all img {
  margin-top: -3px;
  padding-left: 10px;
  padding-right: 60px;
}
a:hover{
  text-decoration: none!important;
}
.navs_container a:hover {
  color: #4BDF15;
}
.footer_navs_container {
  text-align: center;
}
.footer_navs_container a:hover {
  color: #4BDF15;
}
.footer_navs_container a{
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  padding: 20px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  text-decoration: none;
  /* white */

  color: #FFFFFF;
}
.footer_container .logo_container img {
  padding-top: 60px;
  width: 475px;
}
.f_social .row .discord{
  padding-bottom: 50px;
}
.f_social {
  text-align: right;
  padding-top: 80px;
}
.f_social a {

  animation: float 5s ease-in-out infinite;
}
.floating {
  animation: float 5s ease-in-out infinite;
}
.f_social a.discord {
  animation-delay: 1s!important;
}
.copyright_container a{

}
.copyright_container p, .copyright_container a{
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5) !important;
}
.footer_navs_container a:hover {
  color: #4BDF15!important;
}
.footer_navs_container a {
  color: #FFFFFF!important;
  cursor: pointer;
  z-index: 4444444;
}
.regular_text_big {
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 140%;
  /* or 25px */


  /* white */

  color: #FFFFFF;
}
.regular_text_small {
  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  /* or 25px */


  /* white */

  color: #FFFFFF;
}
.regular_text {

  font-family: 'Rubik', sans-serif!important;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */


  /* white */

  color: #FFFFFF;

}
@media screen and (max-width: 330px){
  .wt_b {
    left: 0!important;
  }
  .r_card_title {
    font-size: 18px!important;
  }
  .road_card_container {
    padding: 50px 15px!important;
  }
}


@media screen and (max-width: 576px){
  .hoverFirst .f_card_inner, .hovering .f_card_inner{
    height: 78px!important;
  }

  .s_card {
    padding: 0 0 20px 0!important;
    height: 520px;
  }
  .pt_150 {
    padding-top: 10px;
    margin-top: 150px;
  }
  .pl_60 {
    padding-left: 15px;
  }
  .pr_60 {
    padding-right: 15px;
  }
  .tab-content {
    width: 100%;
  }
  .nav-pills {
    height: 80px;
    margin-left: -15px;
    white-space: nowrap;
    width: calc(100% + 15px);
    justify-content: space-around;
  }

  .nav-link {
    color: rgba(255, 255, 255, 0.5);
  }
  .flex-column {
    flex-direction: initial!important;
  }
  .nav-link {
    width: 33%;
    height: 100% !important;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
  }
  .creators_container li {
    font-size: 14px;
    line-height: 140%;
    color: #FFFFFF;
  }
  .align-items-start {
    flex-direction: column-reverse;
  }
  .title_section h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 40px!important;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  h2 {
    font-weight: 400;
    font-size: 40px!important;
  }
  .text_description_section {
    padding: 0;
  }
  .pb_28 {
    padding-top: 20px;
    padding-bottom: 45px;
  }
  .nf_button {
    top: 460px;
    left: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    padding: 10px 25px 10px;

  }
  .wt_b {
    left: 15%;
  }
  .about_container {
    height: 100%!important;
    margin-bottom: -1px;
  }

  .about_opacity {
    height: 100%;
  }
  .creators_container {
    padding-top: 100px;
  }
  .links_container {
    width: 100%;
    margin-top: 125px;
    justify-content: center;
  }
  .links_container a {
    margin: 15px;
  }
  .can img {
    height: 125px;
    float: left;
    padding-right: 5%;
  }
  .can .regular_text {
    width: 65%;
    margin-left: 35%;
    margin-top: -100px;
  }
  .can .nf_button {
    top:0!important;
  }
  .see_all img {
    margin-top: -3px;
    padding-left: 10px;
     padding-right: 0;
  }
  .see_all {
    text-align: right;
  }

  .regular_text {
    font-size: 16px;
  }
  .regular_text_big {
    font-size: 18px;
  }
  .pr_60 .regular_text {
    padding-top: 40px;
    font-size: 14px;
  }
  .nf_hr {
    width: 100%;
  }

  #services .regular_text {
    padding-left: 15px;
  }
  .features_container {
    display: block;
    height: fit-content;
  }
  .f_card {
    width: 100%;
    height: 148px;
    margin-top: 50px;
  }
  .f_card_inner {
    height: 78px!important;
    padding: 0;
  }
  .hoverFirst .f_card_inner {
    height: 78px!important;
  }

  .hoverFirst #f_card_inner_1::before {
    content: url("../assets/planet1.svg");

    position: absolute;
    left: 20%;
    top: -180px;
    transform: translateZ(-1px);
    -webkit-animation: fadeIn 1s;
  }
  #f_card_inner_1::before  {
    content: url("../assets/planet1.svg");

    position: absolute;
    left: 20%;
    top: -120px;
    transform: translateZ(-1px);
    -webkit-animation: fadeIn 1s;
  }
  #f_card_inner_2::before {
    content: url("../assets/planet2.svg");

    position: absolute;
    left: 20%;
    top: -120px;
    transform: translateZ(-1px);
    /*animation: fadeIn 5s;*/
    -webkit-animation: fadeIn 1s;


  }
  #f_card_inner_3::before  {
    content: url("../assets/planet3.svg");

    position: absolute;
    left: 20%;
    top: -120px;
    transform: translateZ(-1px);
    -webkit-animation: fadeIn 1s;
  }
  .f_card_inner::before {
    transform: translateZ(-1px) scale(0.5) !important;
    left: 20% !important;
    top: -120px!important;
  }
  .f_card::after{
    transition: all 1.5s;
    border: 0 solid transparent;

    content: '';
    height: 0;
    position: absolute;
    width: 30%;
    border-bottom: 2px solid #4BDF15;
    bottom: 0;
    right: 0;
  }
  .f_card::before {
    transition: all 1.5s;
    border: 0 solid transparent;
    content: '';
    height: 0;
    position: absolute;
    width: 30%;
    border-top: 2px solid #4BDF15;
    left: 0;
    top: 0;
  }
  .f_card_text {
    font-size: 18px!important;
    line-height: 120%;
    padding: 6% 0;
  }
  .roadmap_container {
    display: block;
  }
  .road_card_container {
    width: 100%;
    margin: 0!important;
    height: 240px;
    padding: 50px 24px;
  }
  .road_card_container::before {
    content: url("../assets/mobile_arrow.png");
    position: absolute;
    right: -9px;

  }

  .team_container {
    display: flex;
    overflow: scroll;
  }
  .t_card_container {
    margin-top: 80px;
    min-width: 100%;
    margin-right: 15px;
  }
  .r_card_title {
    font-size: 20px;
  }
  .r_card_text {
    font-size: 14px;
  }
  .t_card_inner {
    -webkit-filter: brightness(100%);
    height: 560px
  }
  .tc_name {
    font-size: 20px;
  }
  .tc_position {
    font-size: 14px;
  }
  .float_planet_left {
    content: url("../assets/mobile_planet.svg");
    position: absolute;
    left: unset;
    z-index: 1;
    max-height: 120px;
    right: 0;
    margin-top: 20px;
  }
  #team {
    margin-top: 50px;
  }
  .mob_mt_50 .regular_text p {
    font-size: 16px;
  }

  .float_planet_right {
    max-height: 130px;
    z-index: 9;
    margin-top: 90px;

  }
  .footer_navs_container {
    text-align: left;
    display: grid;
    width: 40%;
    float: right;
  }
  .footer_container .logo_container img {
    padding-top: 0;
    width: 155px;
  }
  .foot_astro {
    max-height: 110px;
    margin-top: 30px;
    margin-bottom: 30px;

    margin-left: 30px;

  }
  .text-center {
    text-align: left!important;
  }
  .foot_social_links {
    display: inline-block;
    float: left;
    margin-top: 20px;
    margin-left: 15px;
  }
  .copyright_container .text-center{
    padding-top: 25%;
    max-width: 70%;
    text-align: center!important;
    margin: auto;
  }
  .or_1 {order: 1;}
  .or_2 {order: 2;}
  .or_3 {order: 3;}


  .non_mobile, .navs_container, .road_card_container:after {
    display: none;
  }

  .mobile .next_tab {
    content: url("../assets/next.svg");
    background: transparent!important;
  }
  .mobile .prev_tab {
    content: url("../assets/prev.svg");
    background: transparent!important;
  }
  .mobile.nav-pills {
    max-width: 42%;
    margin-left: 60%;
    position: absolute;
    top:105%;
    right:0;
  }
  .about_section .nf_button{
    height: 40px!important;
    top: 114%!important;
    left:15px;
    position: absolute;
  }
  .left_astro {
    width: 60%;
    padding-left: 15px;
  }

}
@media screen and (min-width: 576px) {
  .mobile {
    display: none!important;
  }
}

@media screen and (min-width: 577px) and (max-width: 1200px) {
  .tab-content {
    width: 100%;
  }

  .nav-pills {
    height: 80px;
    margin-left: -15px;
    white-space: nowrap;
    width: calc(100% + 15px);
    justify-content: space-around;
  }

  .nav-link {
    color: rgba(255, 255, 255, 0.5);
  }
  .flex-column {
    flex-direction: initial!important;
  }
  .nav-link {
    width: 33%;
    height: 100% !important;
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
  }
  .align-items-start {
    flex-direction: column-reverse;
  }
  .links_container {
    width: 25%;
    margin-top: 35px;
  }





  .about_container {
    min-height: fit-content;
  }

  .about_container .nf_button {
    height: 48px!important;
    top: 105%!important;
    right: 15px;
    position: absolute;
    padding: 12px 20px 12px;
  }

  .foot_astro {
    max-height: 150px;
    position: absolute;
    top: 50px;
  }
  .foot_social_links {
    margin-top: -75px;
  }
  .float_planet_right {
    max-height: 200px;
  }
  .footer_container .logo_container img {

    width: 375px;
  }

  .navs_container a {
    padding-left: 12px!important;
    font-size: 12px;
  }
  .box.slidered .title {
    font-size: 20px !important;
    line-height: 20px;
  }
  .box.slidered img {
    height: 100px;
  }
  .box.slidered {
    height: fit-content;
    padding: 20px 20px 20px 20px;
  }
  .text_t_container {
    height: 110px;
  }
  .float_planet_left {
    max-height: 150px;
  }
  .prev {
     padding-top: 0;
    margin-top: -20px;
    z-index: 222;
  }
  .next {
    padding-top: 0;
    margin-top: -20px;
  }
  .title_section h2 {
    padding-bottom: 10px;
    padding-top: 20px;
    font-size: 32px!important;
  }
  .navs_container {
    padding-top: 37px;
    overflow: hidden;
  }
  .box .nf_button {
    top: 0;
    padding: 5px;
    height: fit-content;
    font-size: 16px;
  }

  .box p {
    font-weight: 300;
    font-size: 14px;
    line-height: 100%;
  }
  .r_card_title {
    font-size: 18px;
    line-height: 20px;
  }
  .road_card_container::after {
    display: none;
  }
  .road_card_container {
    height: 250px;
    padding: 30px 50px 30px 20px;
  }

  .text_description_section {
    padding-top: 0;
    padding-right: 72px;
  }
  .inner .pr_60 {
    padding-top: 45px;
  }
  .inner .nf_button {
    left: 0;
    top: 0;
  }
  .nf_button {
    left: calc(100% - 200px);
    top: 105%;
  }
  .hovering .f_card_text, .hoverFirst .f_card_text {
    font-size: 26px;
  }
  .pt_150 .regular_text {
    padding-left: 60px;
  }
  .hoverFirst #f_card_inner_1:before, .hovering #f_card_inner_1:before, .hovering #f_card_inner_2:before, .hovering #f_card_inner_3:before {
    height: 140px;
    width: 140px;
    position: absolute;
    left: 17%;
    transform: scale(0.7) translateZ(-1px) !important;
    top: -159px;
    animation-name:none!important;
  }
  .team_container {
    display: flex;
    height: 577px;
    width: 100%;
    overflow: scroll;
  }
  .team_container::-webkit-scrollbar-track {
      background: transparent;
  }
  *::-webkit-scrollbar {
    width: 0;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
  }

  * {
    -ms-overflow-style: none;
  }
  .t_card_container {
    width: calc(45% - 15px);
    display: flex;
    min-width: calc(50% - 15px);
    margin-right: 15px;
  }


  .slider_text_container {
    position: absolute;
    max-width: 77%;
    padding-top: 20%;
  }
  .pt_150 {
    padding-top: 200px;
  }


  @keyframes fadeIn {

    0% {
      -webkit-opacity:0;
      opacity:0;
      -webkit-transform: scale(0.1) translateZ(-1px);
      transform: scale(0.1) translateZ(-1px);
    }
    100% {
      -webkit-opacity:1;
      opacity:1;
      -webkit-transform: scale(0.7) translateZ(-1px);
      transform: scale(1) translateZ(-1px);
    }
  }
  }
@media screen and (min-width: 577px) and (max-width: 800px) and (max-height: 1000px){
  .logo_container img {
    width: 110px!important;
    cursor: pointer;
  }
  .navs_container a {
    padding-left: 12px!important;
    font-size: 12px!important;
  }
  .about_container {
    overflow: hidden;
  }
  .about_section p {
    font-size: 12px!important;
  }
  .links_container {
    width: 25%;
    margin-top: -60px;
  }
  .links_container a img {
    height: 20px;
  }
  .text_description_section {

     padding-right: 0!important;
  }
  .nav-link {

    font-size: 24px!important;

  }


}


</style>