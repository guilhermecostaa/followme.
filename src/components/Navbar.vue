<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="follow2">
      <b-navbar-brand href="#">
        <img src="../assets/LogoBranco.png" width="125" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav pills card-header slot="header" v-b-scrollspy:nav-scroller>
            <b-nav-item href="#Home" @click="scrollIntoView">Home</b-nav-item>
            <b-nav-item href="#Mapa" @click="scrollIntoView">Mapa</b-nav-item>
            <b-nav-item href="#Locais" @click="scrollIntoView">Locais</b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Área Utilizador</em>
            </template>
            <b-dropdown-item @click="btnPerfilClicked" href="#">Perfil</b-dropdown-item>
            <b-dropdown-item @click="btnLogoutClicked" href="#">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
export default {
  methods: {
    btnLogoutClicked() {
      this.$swal({
        title: "Tem a certeza?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sair"
      }).then(result => {
        if (result.value) {
          this.$swal("Sessão terminada!", "Até a próxima!", "success");
          this.$store.commit("USER_LOGGED_OUT");
          this.$router.push({ name: "login" });
        }
      });
    },
    btnPerfilClicked() {
      this.$router.push({ name: "backoffice" });
    },
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    }
  }
};
</script>

<style scoped>
.navbar-default {
  background-color: #1f6b69 !important;
}
.navbar-brand {
  margin-left: 10px;
}
.navbar-brand:hover {
  transform: scale(1.05);
}
.nav-item {
  font-size: 1.05rem;
  color: #cee6df !important;
  font-weight: 600;
  cursor: pointer;
  font-family: Gotham Light;
}
.nav-link:hover {
  color: #ffffff !important;
}
.active-route {
  color: #ffffff !important;
}
#nav-user-logged:hover {
  text-decoration: none !important;
}
.dropdown-item:active {
  background-color: #ffffff;
}
</style>