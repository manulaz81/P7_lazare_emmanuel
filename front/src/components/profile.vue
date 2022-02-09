<template>
	<div id="profile">
		<p class="titreProfil">Votre profil</p>
		<div class="partOne">
			<div class="photoProfil">
				<img id="photoProfil" src="../assets/1saucepimente.jpg" alt="photoProfil" style="width: 100%" />
			</div>
			<div class="infoProfil">
				<div class="emailProfil">
					Email
					<div class="recupEmail">{{ email }}</div>
				</div>
				<div class="pseudol">
					Pseudo
					<p>{{ pseudo }}</p>
				</div>

				<div class="votreBio">
					Biographie
					<p> {{ bio }}</p>
				</div>
			</div>
		</div>

		<!-- les modifications de profil -->
		<button v-on:click="updateProfil">Mettre à jour son profil</button>

		<button id="button__suppressioncompte" v-on:click="deleteCompte">Supprimer votre compte</button>

		<form id="register" method="put" @submit="updatePost">
			<p>Mettez à jour vos données</p>

			<p><label for="email">Votre nouvel Email</label></p>
			<p><input id="newEmail" type="email" name="email" placeholder="votre email" /></p>

			<p><label for="pseudo">Votre nouveau pseudo</label></p>
			<p><input id="newPseudo" type="text" name="email" placeholder="votre nouveau pseudo" /></p>

			<p><label for="name">Votre nouvelle bio</label></p>
			<p><input id="newBio" type="text" name="name" placeholder="votre bio" /></p>

			<p><label for="password">Votre nouveau mot de passe</label></p>
			<p><input id="newPassword" type="password" name="email" placeholder="votre nouveau mot de passe" /></p>

			<p><label for="password">Votre nouvelle photo de profil</label></p>
			<p><input id="newPhoto" type="file" name="email" /></p>

			<button id="button_valid">Valider vos données</button>
		</form>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	name: '#profile',

	data() {
		return {
			pseudo: '',
			email: ' ',
			bio: '',
			password: ' manu',
			imageProfil: '',
		};
	},
	methods: {
		updateProfil() {
			document.getElementById('register').style.display = 'block';
		},

		deleteCompte() {
			alert('etes vous sur de supprimer votre compte ?');

			axios
				.delete('http://localhost:3000/api/auth/122')

				.then((res) => {
					console.log(res);
					alert('Votre compte a bien été supprimé!');
					this.$router.push('http://localhost:8080/forum');
				})
				.catch(() => {
					alert('Suppression impossible pour le moment');
					this.$router.push('http://localhost:8080');

					console.error('Do that');
					// .catch((erreur) => (this.posts = [{ id: 'erreur de chargement' }]));
				});
		},

		updatePost() {
			// je recupere la valeur des inputs mails, pseudo, bio

			let newPseudo = document.getElementById('newPseudo').value;
			console.log(newPseudo);
			let newEmail = document.getElementById('newEmail').value;
			console.log(newEmail);
			let newBio = document.getElementById('newBio').value;
			console.log(newBio);

			let newImage = document.getElementById('newPhoto').value;
			console.log(newImage);

			// puis je la renvoi dans la base de données

			axios.put('http://localhost:3000/api/auth/122', {
				email: newEmail,
			});
			axios
				.put('http://localhost:3000/api/auth/122', {
					username: newPseudo,
				})

				.put('http://localhost:3000/api/auth/122', {
					bio: newBio,
				});
			axios
				.put('http://localhost:3000/api/auth/122', {
					imageUrl: newImage,
				})

				.then((res) => {
					console.log(res);
					alert('Votre profil a bien été mis à jour!');
					this.$router.push('http://localhost:8080/forum');
				})
				.catch(() => {
					alert('mis à jour incorrect');
					this.$router.push('http://localhost:8080');

					console.error('Do that');
					// .catch((erreur) => (this.posts = [{ id: 'erreur de chargement' }]));
				});
		},
	},

	mounted() {
		axios.get('http://localhost:3000/api/auth/122').then((response) => (this.pseudo = response.data.username));

		axios.get('http://localhost:3000/api/auth/122').then((response) => (this.email = response.data.email));

		axios.get('http://localhost:3000/api/auth/122').then((response) => (this.bio = response.data.bio));

		axios.get('http://localhost:3000/api/auth/122').then((response) => (this.imageProfil = response.data.imageUrl));
	},

	computed: {
		recupNom() {
			let newPseudo = document.getElementById(newPseudo);
			console.log(newPseudo);
			return newPseudo;
		},
	},
};
</script>

<style scoped>
/******************************************************body ***************************************/
#button__suppressioncompte {
	margin-top: 10px;

	background-color: rgb(238, 96, 96);
	color: #000;
}
#register {
	display: none;
}

.titreProfil{
font-size: 1.8rem;
font-weight: bolder;

}
.partOne {
	display: flex;
	margin-bottom: 20px;
}
.emailProfil, .votreBio, .pseudol{
	font-size: 1.5rem;
	font-family:'Courier New', Courier, monospace;
	font-weight:bold;
	text-align: left;
	margin-bottom: 20px;
	justify-content: space-around;
	
};
.photoProfil {
	width: 45%;
	border: 1rem solid pink;
	margin-right: 10px;
}
.infoProfil {
	width: 45%;
	padding : 10px;
	border: 3px solid pink;
	border-radius: 15px;
}

.card {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	max-width: 300px;
	margin: auto;
	text-align: center;
}

.title {
	color: grey;
	font-size: 18px;
}

button {
	border: none;
	outline: 0;
	display: inline-block;
	padding: 8px;
	color: white;
	background-color: pink;
	text-align: center;
	cursor: pointer;
	width: 100%;
	font-size: 18px;
}

a {
	text-decoration: none;
	font-size: 22px;
	color: black;
}

button:hover,
a:hover {
	opacity: 0.7;
}

#photoProfil {
	width: 150px;
}
</style>
