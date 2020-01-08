<template>
  <div class="login">
    <section>
      <div class="topleft">
        <img src="../assets/LogoBranco.png" width="250" height="50" />
      </div>
      <div class="box">
        <b-form @submit.prevent="onSubmit">
          <b-form-group id="input-number" label="Número:" label-for="input-number">
            <b-form-input id="input-number" v-model="form.number" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-password" label="Password:" label-for="input-password">
            <b-form-input id="input-password" v-model="form.password" type="password" required></b-form-input>
          </b-form-group>

          <b-button class="col-6" type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        number: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const user = this.getUserByNumber(this.form.number);
      if (user) {
        if (user.password === this.form.password) {
          this.$store.commit("USER_LOGGED_IN", user.id);
          this.form.number = "";
          this.form.password = "";
          this.$swal({
            text: `Bem-vindo ${user.name}!`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });
          this.$router.push({name:"home"})
        }
      } else {
        this.$swal({
          text: "Utilizador não encontrado!",
          icon: "error",
          timer: 2000,
          showConfirmButton: false
        });
      }
    }
  },
  computed: {
    ...mapGetters(["getUserByNumber"])
  }
};
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/NY.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-color: rgb(31, 107, 105);
  opacity: 0.7;
}
.topleft {
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 18px;
}

.box {
  position: relative;
  max-width: 600px;
  padding: 100px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  color: rgb(255, 255, 255);
  background-color: rgb(102, 122, 131);
  opacity: 0.8;
}
.box:before {
  content: "";
  position: absolute;
  background-attachment: fixed;
}
</style>