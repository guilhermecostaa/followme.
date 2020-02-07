<template lang="html">

  <div refs = "backoffice">

    <vs-sidebar class="sidebar" :parents="$refs.backoffice" :staticPosition="true" index="1" :hidden-background="true"  color="primary"  spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
        <h4>
          <vs-button color="primary" type="flat"></vs-button>
        </h4>

      </div>

      <vs-sidebar-item index="1" :to="{ name: 'backoffice' }">
        Perfil
      </vs-sidebar-item>

      <vs-sidebar-item index="2" :to="{ name: 'backofficeUsers' }">
        Utilizadores
      </vs-sidebar-item>

      <vs-sidebar-item index="3" :to="{ name: 'backofficePontosInteresse' }">
        Pontos de Interesse
      </vs-sidebar-item>

    </vs-sidebar>
  </div>

</template>

<script>
export default {
  data: () => ({
    active: true
  }),
};
</script>

<style>
.sidebar {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    overflow-x: hidden;
}
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