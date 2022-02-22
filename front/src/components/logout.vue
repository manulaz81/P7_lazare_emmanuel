<template>
	<li v-on:click="logout2">logout</li>
</template>

<script>
// import axios from 'axios';
// import cookie from "js-cookie";

export default {
	name: 'logout',

	methods: {
		logout2() {
			localStorage.clear();
            this.$router.push('/');
		},
	},
};
</script>

<style lang="scss"></style>
