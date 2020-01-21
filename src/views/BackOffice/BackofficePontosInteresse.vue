<template>
  <div>
    <b-table :bordered="bordered" :hover="hover" :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["Nome", "Cidade", "Descrição"],
      items: [
        { nome: "Dickerson", cidade: "Porto", desc: "Bonito" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" }
      ],
      bordered: true,
      hover: true
    };
  }
};
</script>

<style scoped>
td:hover {
  cursor: pointer;
}
</style>