<template>
	<div class="pb-5">
		
	</div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
	name: "BackofficeUsers",
	data() {
		return {
			loading: false,
			users: [],
		}
	},
	methods: {
		async loadPage() {
			this.$store.commit("RESET_STATE")
			this.loading = true
			try {
				const response = await this.$http.get("/users")
				if (response.status === 200) {
					this.users = response.data.content.users
					this.loading = false
				}
			} catch (err) {
				this.$router.push({ name: "home" })
			}
		}
	}
}
</script>

<style scoped>
td:hover {
	cursor: pointer;
}
</style>