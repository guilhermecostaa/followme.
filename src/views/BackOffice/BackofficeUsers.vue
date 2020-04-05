<template>
  <div>
    <DataTable :items="getUsers" :fields='["name","number"]'></DataTable>
    <b-button v-b-modal.modal-prevent-closing>Adicionar Utilizador</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Adicionar utilizador"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
        </b-form-group>

        <b-form-group
          :state="numberState"
          label="Number"
          label-for="number-input"
          invalid-feedback="Number is required"
        >
          <b-form-input id="number-input" v-model="number" :state="numberState" required></b-form-input>
        </b-form-group>

        <b-form-group
          label="Password"
          label-for="password-input"
          invalid-feedback="password is required"
        >
          <b-form-input id="password-input" v-model="password" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import { mapGetters } from "vuex";
export default {
  name: "BackofficeUsers",
  components: { DataTable },
  data() {
    return {
      name: "",
      nameState: null,
      number: "",
      numberState: null,
      password: "",
      Users: []
    };
  },
  methods: {
    resetModal() {
      this.name = "";
      this.nameState = null;
      this.number = "";
      this.numberState = null;
      this.password = "";
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      const user = this.getUserByNumber(this.number);
      if (user) {
        this.$swal({
          text: "Já existe utilizador com esse número!",
          icon: "error",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        this.name = "";
        this.number = "";
        this.password = "";
        this.$swal({
          text: `${user.name} adicionado!`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
      }
    },
    computed: {
      ...mapGetters(["getUsers", "getUserByNumber"]),
    }
  }
};
</script>

<style>
.view {
  margin-top: 100px;
}
tr:hover {
  cursor: pointer;
}
</style>