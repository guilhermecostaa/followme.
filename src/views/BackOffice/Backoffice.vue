<template>
	<div class="row container col-12" id="backofficeParent" :style='"background-color: ghostwhite; min-height:" + windowHeight  +  "px;"'>
		<BackofficeSidebar class="col-xl-3 col-md-4 col-2"/>
		<transition name="fade" mode="out-in">
			<router-view style="margin-left:300px;" class="col-xl-9 col-md-8 col-10 view"/>
		</transition>
	</div>
</template>

<script>
import BackofficeSidebar from "@/components/BackofficeSidebar.vue"
export default {
	name: "Backoffice",
	components: { BackofficeSidebar },
	data(){
		return {
			windowHeight: 0
		}
	},
	created(){
		document.addEventListener("resize", this.handleResize)
		this.handleResize()
	},
	methods:{
		handleResize(){
			this.windowHeight = window.innerHeight
		}
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