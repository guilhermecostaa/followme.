<template>
  <div class="login">
    <section>
      <div class="box">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-number" label="Number:" label-for="input-number">
            <b-form-input
              id="input-number"
              v-model="form.number"
              type="email"
              required
              placeholder="Enter email"
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
.section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/NY.png");
  background-attachment: fixed;
  height: 100vh;
}
.box {
  position: relative;
  max-width: 600px;
  padding: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  color: #000;
}
.box:before {
  content: "";
  position: absolute;
  background-attachment: fixed;
  filter: blur(2px);
}
</style>