<template>
  <div>
    <b-table
      :bordered="bordered"
      :hover="hover"
      :items="items"
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['Nome', 'Número'],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
        ],
        bordered: true,
        hover: true,
      }
    }
  }
</script>

<style scoped>
td:hover {
	cursor: pointer;
}
</style>