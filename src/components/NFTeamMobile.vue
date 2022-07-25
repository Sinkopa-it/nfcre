<template>

</template>

<script>
import axios from "axios";

export default {
  name: "NFTeamMobile.vue",
  data() {
    return {
      Person_name: null,
      Person_position: null,
      MPerson_image: null,
      Person_name1:null,
      Person_position1:null,
      MPerson_image1:null,
      Person_name2:null,
      Person_position2:null,
      MPerson_image2:null,
      Person_name3:null,
      Person_position3:null,
      MPerson_image3:null,
    }
  },
  created() {
    axios.get("https://cockpit.nfcreators.io/api/collections/entries/Team")
        .then(response => {

          this.Person_name = response.data.entries[0].Person_name;
          this.Person_position = response.data.entries[0].Person_position;
          this.MPerson_image = response.data.entries[0].Person_image;

          this.Person_name1 = response.data.entries[1].Person_name;
          this.Person_position1 = response.data.entries[1].Person_position;
          this.MPerson_image1 = response.data.entries[1].Person_image;

          this.Person_name2 = response.data.entries[2].Person_name;
          this.Person_position2 = response.data.entries[2].Person_position;
          this.MPerson_image2 = response.data.entries[2].Person_image;

          this.Person_name3 = response.data.entries[3].Person_name;
          this.Person_position3 = response.data.entries[3].Person_position;
          this.MPerson_image3 = response.data.entries[3].Person_image;
        });
  }

}
</script>

<style scoped>




</style>