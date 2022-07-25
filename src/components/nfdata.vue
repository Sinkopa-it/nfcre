<template>
<div>
  <h2>data check
  </h2>
  <div class="card-body">visionTetx1: {{visionTetx1}}</div>
  <div class="card-body">projectText1: {{projectText1}}</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "nfdata.vue",

  data() {
    return {
     visionTetx1:null,
     visionTetx2:null,
     projectText1:null,
     projectText2:null,


    };
  },
  created() {
    axios.get(" https://cockpit.nfcreators.io/api/collections/entries/about1")
        .then(response => {
          console.log(response.data);
          // console.log(response.data.entries[3].project);
          // console.log(response.data.entries[3].vision);
          this.visionTetx1 = response.data.entries[3].vision;
          this.projectText1 = response.data.entries[3].project;
        });
  }

}
</script>

<style scoped>

</style>