<template >
  <div>
    <div class="PRINCIPAL">

    </div>
    <div class="MEIO">

    </div>
    <div class="FIM">
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  
}


</script>

<style scoped>
.PRINCIPAL {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/NY-1.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-color: rgb(31, 107, 105);
  opacity: 0.7;
}
.MEIO{
  background-color:#5B8687;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.FIM{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/porto.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-color: rgb(31, 107, 105);
  opacity: 0.7;
}
</style>
