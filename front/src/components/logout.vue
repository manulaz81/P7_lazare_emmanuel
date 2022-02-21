<template>
	<li v-on:click="logoutplus">logout</li>
</template>

<script>
import axios from 'axios';
import cookie from "js-cookie";

export default {
	name: 'logout',

	methods: {
		logoutplus() {
            const removeCookie = function(key){
                cookie.remove(key,{ expires:1})
            }
            
			axios
				.get('http://localhost:3000/api/auth/logout')
				.then(() => removeCookie('jwt')
				
				)
				.catch((error) => error);
		},
	},
};
</script>

<style lang="scss"></style>
