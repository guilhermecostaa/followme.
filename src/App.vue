<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import data from "@/store/data.js";
export default {
  created() {
    window.addEventListener("beforeunload", () => {
      this.$destroy();
    });
    if (!localStorage.users) {
      console.log(true);
      localStorage.users = JSON.stringify(data.users);
      this.SET_USERS(data.users);
    } else {
      console.log(false);
      this.SET_USERS(JSON.parse(localStorage.users));
    }
    if (localStorage.loggedUserId) {
      this.USER_LOGGED_IN(parseInt(localStorage.loggedUserId));
    }
  },
  destroyed() {
    localStorage.users = JSON.stringify(this.getUsers);
    localStorage.loggedUserId = JSON.stringify(this.getLoggedUserId);
  },
  methods: {
    ...mapMutations(["SET_USERS", "USER_LOGGED_IN"])
  },
  computed: {
    ...mapGetters(["getUsers", "getLoggedUserId"])
  }
};
</script>


<style lang="scss">
@import "./assets/styles/scss/custom.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5b8687;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #5b8687;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
