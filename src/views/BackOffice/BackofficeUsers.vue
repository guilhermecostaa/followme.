<template>
  <DataTable :items="getUsers" :fields='["name","number"]'></DataTable>
</template>

<script>
import DataTable from "@/components/DataTable.vue"
import {mapGetters} from "vuex";
export default {
	name: "BackofficeUsers",
    components: { DataTable },
    computed: {
    ...mapGetters(["getUsers"]),
  }
}
</script>

<style>
.view {
  margin-top: 100px;
}
tr:hover {
  cursor: pointer;
}
</style>