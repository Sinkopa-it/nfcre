<template>
<div class="pr_60">

  <div class="wrapper">

    <div id="0" class="box "><img src="../assets/SLayer1.svg" alt="">
      <h4 class="title">{{Service_title}}</h4>
      <p v-html="Service_description"></p>
      <p class="price">{{Service_time}} | {{Service_price}}</p>
      <a class="nf_button cr_b" target="_blank" :href="Service_book_link" >BOOK NOW</a>
    </div>

    <div id="1" class="box slidered"><img src="../assets/SLayer2.svg" alt="">
      <h4 class="title">{{Service_title1}}</h4>
      <p v-html="Service_description1"></p>
      <p class="price">{{Service_time1}} | {{Service_price1}}</p>
      <a class="nf_button cr_b" target="_blank" :href="Service_book_link1" >BOOK NOW</a>
    </div>
    <div id="2" class="box"><img src="../assets/SLayer3.svg" alt="">
      <h4 class="title">{{Service_title2}}</h4>
      <p v-html="Service_description2"></p>
      <p class="price">{{Service_time2}} | {{Service_price2}}</p>
      <a class="nf_button cr_b" target="_blank" :href="Service_book_link2" >BOOK NOW</a>
    </div>
    <div id="3" class="box"><img src="../assets/SLayer4.svg" alt="">
      <h4 class="title">{{Service_title3}}</h4>
      <p v-html="Service_description3"></p>
      <p class="price">{{Service_time3}} | {{Service_price3}}</p>
      <a class="nf_button cr_b" target="_blank" :href="Service_book_link3" >BOOK NOW</a>
    </div>
    <div id="4" class="box"><img src="../assets/SLayer5.svg" alt="">
      <h4 class="title">{{Service_title4}}</h4>
      <p v-html="Service_description4"></p>
      <p class="price">{{Service_time4}} | {{Service_price4}}</p>
      <a class="nf_button cr_b" target="_blank" :href="Service_book_link4" >BOOK NOW</a>
    </div>
    <div id="5" class="box"><img src="../assets/SLayer6.svg" alt="">
      <h4 class="title">{{Service_title5}}</h4>
      <p v-html="Service_description5"></p>
      <p class="price">{{Service_time5}} | {{Service_price5}}</p>
      <a class="nf_button cr_b" target="_blank" :href="Service_book_link5" >BOOK NOW</a>
    </div>
  </div>
  <button @click="nfNext" class="prev"><img src="../assets/prev.svg" alt=""></button>
  <button @click="nfPrev" class="next"><img src="../assets/next.svg" alt=""></button>
  <div class="slider_text_container">
    <p class="slider_text" v-html="Services_text_bottom">
    </p>
  </div>
</div>
</template>

<script>

import gsap from "gsap";
import axios from "axios";
export default {
  data: () => ({
    currSlide: 2,
    Services_text_bottom: null,

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
    axios.get("https://cockpit.nfcreators.io/api/collections/entries/Services_text")
        .then(response => {
          this.Services_text_bottom = response.data.entries[0].Services_text_bottom;
        });
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
  created() {

  },
  mounted() {
    const wrapper = document.querySelector(".wrapper");
    const colors = ["rgba(1, 0, 42, 0.6)","rgba(1, 0, 42, 0.6)", "rgba(1, 0, 42, 0.7)", "rgba(1, 0, 42, 0.6)"];
    const boxes = gsap.utils.toArray(".box");

    gsap.set(boxes , {
      backgroundColor: gsap.utils.wrap(colors)
    });

    const loop = horizontalLoop(boxes, {paused: true});

    // boxes.forEach((box, i) => box.addEventListener("click", () => loop.toIndex(i, {duration: 0.8, ease: "power1.inOut"})));

    // document.querySelector(".toggle").addEventListener("click", () => wrapper.classList.toggle("show-overflow"));
    document.querySelector(".next").addEventListener("click", () => loop.next({duration: 0.4, ease: "power1.inOut"}));
    document.querySelector(".prev").addEventListener("click", () => loop.previous({duration: 0.4, ease: "power1.inOut"}));


    /*
    This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

    Features:
     - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
     - When each item animates to the left or right enough, it will loop back to the other side
     - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
     - The returned timeline will have the following methods added to it:
       - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
       - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
       - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
       - current() - returns the current index (if an animation is in-progress, it reflects the final index)
       - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
     */
    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
          length = items.length,
          startX = items[0].offsetLeft,
          times = [],
          widths = [],
          xPercents = [],
          curIndex = 0,
          pixelsPerSecond = (config.speed || 1) * 100,
          snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
          totalWidth, curX, distanceToStart, distanceToLoop, item, i;

      gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
          return xPercents[i];
        }
      });
      gsap.set(items, {x: 0});
      totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
            .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        let mov = '';
        if (index > curIndex) {
           mov = 'next';
        }
        if (index < curIndex) {
           mov = 'prev';
        }

        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
          vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;

       if ( mov == 'next') {
         console.log(newIndex);
         if (newIndex == 5) {
           document.getElementById(0).classList.add("slidered")
           document.getElementById(newIndex).classList.remove("slidered")
         } else if (newIndex == 0) {
           document.getElementById(1).classList.add("slidered")
           document.getElementById(0).classList.remove("slidered")
         } else {
           document.getElementById(newIndex).classList.remove("slidered")
           document.getElementById(newIndex - 1).classList.remove("slidered")
           document.getElementById(newIndex + 1).classList.add("slidered")
         }
       }
        if ( mov == 'prev') {
          if (newIndex == 5) {
            document.getElementById(0).classList.add("slidered")
            document.getElementById(1).classList.remove("slidered")
          } else if (newIndex == 4) {
            document.getElementById(5).classList.add("slidered")
            document.getElementById(0).classList.remove("slidered")
          } else {
            document.getElementById(newIndex ).classList.remove("slidered")
            document.getElementById(newIndex + 2).classList.remove("slidered")
            document.getElementById(newIndex + 1).classList.add("slidered")
          }
        }
        return tl.tweenTo(time, vars);
      }
      tl.next = vars => toIndex(curIndex+1, vars);
      tl.previous = vars => toIndex(curIndex-1, vars);
      tl.current = () => curIndex;

      tl.toIndex = (index, vars) => toIndex(index, vars);

      tl.times = times;

      tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    }
  }
}
</script>
<style>


.wrapper {
  align-items: flex-start!important;
  height: 575px;
  width: 100%;
  padding-top: 50px;
  position: relative;
  display: flex;
  overflow: hidden;
}

.carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box.slidered {
  opacity: 1;
  border: 1px solid #4BDF15;
  background: rgba(1, 0, 42, 0.8);
  /*width: 50%;*/
  height: 500px;
  padding: 60px 100px 25px 40px;
}
.box {

  /*height: 300px;*/
  width: 40%;
  /*height: 300px;*/
}
.box {
  opacity: 0.6;
  transition: all 1.2s;
  display: inline-block;
  align-items: center;
  justify-content: center;
  background: rgba(1, 0, 42, 0.6);
  /*height: 480px;*/
  /*width: 50%;*/
  margin: 20px;
  padding: 60px 40px;
  position: relative;
  flex-shrink: 0;
  color: white;
  font-size: 21px;
  /*cursor: pointer;*/
}
.box img {
  height: 150px;
  position: relative;
  display: block;
  text-align: center;
  margin: auto;
  -webkit-animation: fadeOut 0.7s ;
  margin-bottom: 12px;
}
.box.slidered img {
  height: 140px;
  position: absolute;
  top: -50px;
  right: -40px;
  -webkit-animation: fadeIn 2s ;
}
.box.slidered a {
  display: block;
}
.box .title, .price{
  text-align: center;
  display: block;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400!important;
  font-size: 18px!important;
  line-height: 21px;
  padding: 2% 15%;
  text-transform: uppercase;

  color: #FFFFFF;

}
.box.slidered .title {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 28px!important;
  line-height: 33px;
  padding: 0;
  text-transform: uppercase;
  color: #FFFFFF;
}
 .box.slidered .price {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 20px!important;
  line-height: 33px;
  padding: 0;
  text-transform: uppercase;
  color: #FFFFFF;
}
.box.slidered p {
  display: block;
}
.box a {
  display: none;
}
.box p {
  display: none;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  color: #FFFFFF;
}


.prev {
  right:22%;
   position: absolute;
  padding-top: 15px;
  z-index: 222;

}
.next {
  right: 18%;
   position: absolute;
  padding-top: 15px;
  z-index: 222;


}
button {
  align-items: flex-end;

  text-align: right;
  background: transparent;
  border: none;
  cursor: pointer;
}

.show-overflow {
  overflow: visible;
}
.slider_text {
  font-family: 'Rubik',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */
margin-top: -100px;

  /* white */

  color: #FFFFFF;



}
.slider_text_container {
  position: absolute;
  max-width: 35%;
}
@media screen and (max-width: 576px) {
  .slider_text_container {
    position: relative;
    max-width: 100%;
  }
  .box {
    width: 85%;
  }
  .s_card {
    padding: 20px;
  }
}
</style>
