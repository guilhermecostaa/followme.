<template lang="html">

  <div id="parentx">

    <vs-sidebar static-position parent="body" index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h4>
          {{this.getLoggedUserNameById}}
          <vs-button color="primary" type="flat"></vs-button>
        </h4>

      </div>

      <vs-sidebar-item index="1" @click="btnPerfilClicked">
        Perfil
      </vs-sidebar-item>

      <vs-sidebar-item index="2" @click="btnUtilizadoresClicked">
        Utilizadores
      </vs-sidebar-item>

      <vs-sidebar-item index="3" @click="btnPontosInteresseClicked">
        Pontos de Interesse
      </vs-sidebar-item>

    </vs-sidebar>
  </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    active: true
  }),
  methods: {
    btnPerfilClicked() {
      this.$router.push({ name: "backoffice" });
    },
    btnUtilizadoresClicked() {
      this.$router.push({ name: "backofficeUsers" });
    },
    btnPontosInteresseClicked() {
      this.$router.push({ name: "backofficePontosInteresse" });
    }
  },
  computed: {
    ...mapGetters(["getLoggedUserNameById"])
  }
};
</script>

<style>
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.button {
  margin-left: 10px;
}
</style>