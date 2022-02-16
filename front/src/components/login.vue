<template>
	<form id="formulaire" action="http://localhost:8080/forum" method="post" novalidate="">
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
				.post('http://localhost:3000/api/login', {
					email: this.email,
					password: this.password,
				}, {
                    headers:{ 'Content-type': 'application/json'}
                }
			)

				.then((response) => console.log(response.data.accesToken)
	// 			axios.defaults.headers.common['authorization'] = `Bearer ${response.data.accessToken}`;
	// refreshToken = response.data.refreshToken;
	// loadUserInfos()
	
					// this.$router.push('http://localhost:8080/forum');
					// alert('bonjour et bienvenue sur le forum!');
				)
			
			.catch(() => {
				alert('Votre mot de passe et ou votre email sont incorrects');
				this.$router.push('http://localhost:8080/forum');

				// .catch((erreur) => (this.posts = [{ id: 'erreur de chargement' }]));
			});

		
		},
	},
};
</script>

<style lang="scss">
/*  */
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
