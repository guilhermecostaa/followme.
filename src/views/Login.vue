<template>
  <div class="login">
      <section>
        <div class="topleft">
          <img src="../assets/LogoBranco.png" width="250" height="50">
      </div>
      <div class="box" >
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-number" label="Número:" label-for="input-number">
            <b-form-input
              id="input-number"
              v-model="form.number"
              type="text"
              required
              placeholder="Número"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-password" label="Password:" label-for="input-password">
            <b-form-input
              id="input-password"
              v-model="form.password"
              required
              placeholder="Password"
              description="We'll never share your email with anyone else."
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      
      </div>
      </section>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>

section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../assets/NY.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-color:rgb(31,107,105);opacity:0.7;
  
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
  background-color:rgb(102,122,131);opacity:0.8;

}
.box:before {
  content: "";
  position: absolute;
  background-attachment: fixed;
  
}
</style>