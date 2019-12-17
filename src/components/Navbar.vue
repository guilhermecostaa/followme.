<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">
            <img src="../assets/LogoBranco.png" width="125">
        </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Mapa</b-nav-item>
          <b-nav-item href="#">Locais</b-nav-item>
        </b-navbar-nav>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Área Utilizador</em>
            </template>
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>



<style scoped>

.navbar-default {
    background-color: #1F6B69 !important;
}
.navbar-brand{
    margin-left: 10px;
}
.navbar-brand:hover {
  transform: scale(1.05);
}
.nav-item {
  font-size: 1.05rem;
  color: #5B8687 !important;
  font-weight: 600;
  cursor: pointer;
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
  background-color: #FFFFFF;
}
</style>