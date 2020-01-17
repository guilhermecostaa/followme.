<template >
  <div>
    <div class="PRINCIPAL">
      <div class="Texto">
        <h1>FOLLOW ME. </h1>
        <h4>O guia que tu precisas para seres feliz</h4>
        <p>___________________________________________________________________________</p>
        <h4>A plataforma onde poderás encontrar locais para visitar <br>
           e também pessoas para socializar.</h4>
      </div>
    </div>
    <div class="MEIO row">
      <form @submit.prevent="search">
        <input type="text" class="form-control" v-model="address" placeholder="Endereço/Local"/>
        <input type="submit" class="form-control btn btn-primary" value="Pesquisar"/>
      </form>
      <br />
      <GmapMap :center="center" :zoom="8" map-type-id="terrain" style="width: 100%; height: 500px">
        <GmapMarker
          :key="index"
          v-for="(point, index) in getPoints"
          :position="point.position"
          :clickable="true"
          :draggable="true"
          @click="center=point.position"
        />
        <GmapInfoWindow :options='{content: "teste"}'/>
      </GmapMap>
    </div>
    <div class="FIM">
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "home",
  data() {
    return {
      address: "",
      center: { lat: 39.3998718, lng: -8.2244539}
    };
  },
  methods: {
    ...mapMutations(["ADD_POINT"]),
    async search() {
      const request = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyCCsmQADrgWSiOCJ3YdkiH0g1jH2wGLjHQ`
      );
      const point = {
        position: request.data.results[0].geometry.location
      };
      this.ADD_POINT(point);
      this.center = point.position;
    }
  },
  computed: {
    ...mapGetters(["getPoints"])
  }
};
</script>

<style scoped>
.PRINCIPAL {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/NY-1.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-color: rgb(31, 107, 105);
  opacity: 0.7;
}
.MEIO {
  background-color: #5b8687;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.FIM {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/porto.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-color: rgb(31, 107, 105);
  opacity: 0.7;
}
h1 {
  color: white;
  letter-spacing: 5px;
}
.Texto{
  color: white;
  text-align: left;
}
</style>
