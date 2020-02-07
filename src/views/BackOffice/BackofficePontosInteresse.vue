<template>
  <DataTable :items="getInterestPoints" :fields='["name","city","desc"]'></DataTable>
</template>

<script>
import DataTable from "@/components/DataTable.vue"
import {mapGetters} from "vuex";
export default {
	name: "BackofficePontosInteresse",
    components: { DataTable },
    computed: {
    ...mapGetters(["getInterestPoints"]),
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