<template>
	<form id="register" method="post" @submit="updatePost">
		<p v-if="pseudo">Inscription</p>

		<p>Vous n'avez pas compte ?</p>
		<p>Inscrivez-vous !</p>

		<p><label for="email">Email</label></p>
		<p><input id="email" type="email" name="email" placeholder="votre email" v-model="email" required /></p>
		<span v-if="!email">Email non valide !</span>

		<p><label for="password">Password</label></p>
		<p>
			<input id="email" type="password" name="email" placeholder="votre mot de passe" v-model="password" required />
		</p>
		<span v-if="!password">password non valide !</span>

		<p><label for="name">Pseudo</label></p>
		<p><input id="name" type="text" name="name" placeholder="votre nom d'utilisateur" v-model="username" required /></p>

		<button  id="button_inscrit">S'inscrire</button>
	</form>

	
</template>

<script>
import axios from 'axios';
// import Vue from 'vue'

export default {
	name: 'register',
	data() {
		return {
			username: '',
			email: '',
			password: '',
			info: '',
		};
	},

	methods: {
		updatePost() {
			axios
				.post('http://localhost:3000/api/auth/signUp', {
					username: this.username,
					email: this.email,
					password: this.password,
				})

				.then((res) => {
					console.log(res);
					alert('Votre compte a bien été créé! Vous pouvez vous connecter maintenant!');
					this.$router.push('http://localhost:8080');
				})
				.catch(() => {
					alert('Votre compte existe déjà');
					this.$router.push('http://localhost:8080');

					console.error('Do that');
					// .catch((erreur) => (this.posts = [{ id: 'erreur de chargement' }]));
				});
		},
	},

	// 	methods : {
	// updatePost() {
	// 					axios
	// 						.get('http://localhost:3000/api/messages')
	// 						.then((response) => (this.posts = response.data))

	// 				},

	// 	}
};
</script>

<style lang="scss">

</style>
