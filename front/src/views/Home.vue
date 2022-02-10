<template>
	<div class="Home">
		<navigation />
		<p>Bienvenue sur le réseau social de l'entreprise Groupomania</p>
		<img id="photo_logo" alt="Vue logo" src="../assets/icon.png" />
		<login />
    
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import login from '@/components/login.vue';
import navigation from '@/components/navigation.vue';
// import axios from 'axios';

export default {
	name: 'Home',
	components: {
		login,
		navigation,
	}
	// methods: {
	// 	updatePost() {
	// 		axios.get('http://localhost:3000/api/messages').then((response) => (this.posts = response.data));
	// 	},
	// },
};
</script>

<style scoped>
#photo_logo {
	width: 110px;
}
</style>
