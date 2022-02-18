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
		updatePost(e) {
			e.preventDefault();
			axios
				.post('http://localhost:3000/api/auth/signUp', {
					username: this.username,
					email: this.email,
					password: this.password,
				})
				.then((res) => {
					console.log(res);
					alert('Votre compte a bien été créé! Vous pouvez vous connecter maintenant!');
					this.$router.push('/');
				})
				.catch(() => {
					//mettre une condition si ton compte existe alors je reste sur cette page
					//sinon je vais sur la page Connexion
					alert('Votre compte existe déjà');
					this.$router.push('/');
				});
		},
	},
};
</script>

<style lang="scss">

#button_inscrit {
	background-color: pink;
	width: 130px;
	border-radius: 15px;
	height: 3rem;
	color: white;
	margin-top: 15px;
	margin-bottom: 20px;
}


</style>
