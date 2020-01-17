<template>
  <div>
    <Navbar />
    <Card />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
//import Cards from "@/components/Cards.vue";

export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>