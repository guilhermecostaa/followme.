<template>
  <div>
    <b-table :bordered="bordered" :hover="hover" :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
      
  }
};
</script>

<style scoped>
td:hover {
  cursor: pointer;
}
</style>