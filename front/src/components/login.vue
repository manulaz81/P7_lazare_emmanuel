<template>
	<form id="formulaire" action="http://www.yahoo.fr" method="post" novalidate="">
		<p v-if="pseudo">Inscription</p>
		<p v-else>Connectez vous avec vos identifiants</p>

		<p><label for="email">Email</label></p>
		<p><input id="email" type="email" name="email" placeholder="votre email" v-model="email" required /></p>

		<p><label for="password">Password</label></p>
		<p>
			<input id="email" type="password" name="email" placeholder="votre mot de passe" v-model="password" required />
		</p>

		<button id="button_inscrit" v-on:click="updatePost">Se connecter</button>
	</form>
</template>

<script>
import axios from 'axios';
export default {
	name: 'login',

	data() {
		return {			
			email: '',
			password: '',
		};
	},
	methods: {
		updatePost() {
			axios
				.post('http://localhost:3000/api/signUp')
				.then((response) => console.log(response.data))
				this.$router.push('http://localhost:8080');
				alert('bonjour et bienvenue sur le forum!')

				.catch(() => {
					alert('Votre mot de passe ou votre email est incorrect');
					this.$router.push('http://localhost:8080');

					console.error('Do that');
					// .catch((erreur) => (this.posts = [{ id: 'erreur de chargement' }]));
				});
		},
	},
};
</script>

<style>
#app {
	text-align: center;
	border: 1px solid black;
	border-radius: 10px;
	width: 60%;
	vertical-align: center;
	color: black;
	font-size: rem;
	background-color: cadetblue;
}
</style>
