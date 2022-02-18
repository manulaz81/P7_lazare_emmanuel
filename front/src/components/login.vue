<template>
	<form id="formulaire" method="post">
		<p>Inscription</p>
		<p>Connectez vous avec vos identifiants</p>
		<p><label for="email2">Email</label></p>
		<p><input id="email2" type="email" name="email" placeholder="votre email" v-model="email" required /></p>
		<p><label for="password2">Password</label></p>
		<p>
			<input id="email2" type="password" name="email" placeholder="votre mot de passe" v-model="password" required />
		</p>

		<button id="button_inscrit2" v-on:click="login2">Se connecter</button>
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
		login2(e) {
			e.preventDefault();
			axios
				.post('http://localhost:3000/api/auth/login', {
					email: this.email,
					password: this.password,
				})
				.then((res) => {
					console.log(res.data);
					localStorage.setItem('usertoken', res.data.token);
					localStorage.setItem('userid', res.data.userId);
					alert('bonjour et bienvenue sur le forum!');
					this.$router.push('/forum');
				})
				.catch(() => {
					alert('Votre mot de passe et ou votre email sont incorrects');
					this.$router.push('/');
				});
		},
	},

	
};
</script>

<style lang="scss">
/*  */
#button_inscrit2 {
	background-color: pink;
	width: 130px;
	border-radius: 15px;
	height: 3rem;
	color: white;
	margin-top: 15px;
	margin-bottom: 20px;
}
</style>
