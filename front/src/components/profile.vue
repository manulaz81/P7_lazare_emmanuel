<template>
	<div id="profile">
		<p class="titreProfil">Votre profil</p>
		<div class="partOne">
			<div class="photoProfil">
				<img id="photoProfil" src="../assets/photop.jpg" alt="photoProfil" style="width: 100%" />
			</div>
			<div class="infoProfil">
				<div class="emailProfil">
					Email
					<p class="lesInfos">{{ email }}</p>
				</div>
				<div class="pseudol">
					Pseudo
					<p class="lesInfos">{{ pseudo }}</p>
				</div>

				<div class="votreBio">
					Biographie
					<p class="lesInfos">{{ bio }}</p>
				</div>
			</div>
		</div>

		<!-- les modifications de profil -->
		<button v-on:click="updateProfil">Mettre à jour son profil</button>

		<form id="registerProfil" method="post">
			<div class="changement">
				<p class="modifProfil"><label for="email">Votre nouvel Email</label></p>
				<p class="modifProfil2"><input id="newEmail" type="email" name="email" placeholder="votre email" /></p>

				<p class="modifProfil"><label for="pseudo">Votre nouveau pseudo</label></p>
				<p class="modifProfil2"><input id="newPseudo" type="text" name="email" placeholder="votre nouveau pseudo" /></p>

				<p class="modifProfil"><label for="name">Votre nouvelle bio</label></p>
				<p class="modifProfil2"><input id="newBio" type="text" name="name" placeholder="votre bio" /></p>

				<p class="modifProfil"><label for="password2">Votre nouveau mot de passe</label></p>
				<p class="modifProfil2">
					<input id="newPassword2" type="password" name="email" placeholder="votre nouveau mot de passe" />
				</p>

				<!-- <p class="modifProfil"><label for="password">Confirmez votre nouveau mot de passe</label></p>
				<p class="modifProfil2">
					<input id="newPassword" type="password" name="email" placeholder="votre nouveau mot de passe" />
				</p> -->

				<p class="modifProfil"><label for="password">Votre nouvelle photo de profil</label></p>
				<p class="modifProfil2"><input id="newPhoto" type="file" name="email" /></p>
			</div>

			<!-- <div class="validation"> -->
			<button id="button_valid" v-on:click="updatePost">Valider vos données</button>

			<!-- <button id="button__suppressioncompte" v-on:click="deleteCompte">Supprimer votre compte</button> -->
			<!-- </div> -->
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
			password: ' ',
			imageProfil: '',
		};
	},
	methods: {
		updateProfil() {
			document.getElementById('registerProfil').style.display = 'block';
			document.getElementById('registerProfil').style.display = 'flex';
		},

		deleteCompte() {
			alert('etes vous sur de supprimer votre compte ?');

			axios
				.delete('http://localhost:3000/api/auth/')

				.then((res) => {
					console.log(res);
					alert('Votre compte a bien été supprimé!');
					// faire une action de déconnection
					this.$router.push('/');
				})
				.catch(() => {
					alert('Suppression impossible pour le moment');
					this.$router.push('http://localhost:8080');
				});
		},

		updatePost(e) {
			e.preventDefault();
			// je recupere la valeur des inputs mails, pseudo, bio
			let newEmail = document.getElementById('newEmail').value;
			console.log(newEmail);
			let newPseudo = document.getElementById('newPseudo').value;
			console.log(newPseudo);
			let newBio = document.getElementById('newBio').value;
			console.log(newBio);
			let newPassword = document.getElementById('newPassword2').value;
			let newImage = document.getElementById('newPhoto').value;
			console.log(newImage);

			// puis je la renvoi dans la base de données
			axios
				.put('http://localhost:3000/api/auth/2', {
					email: newEmail,
					password: newPassword,
					bio: newBio,
				})

				.then((num) => {
					console.log(num.data);
					alert('Votre compte a bien été mis a jour!');
					// faire une action de déconnection
					this.$router.push('/forum');
				})
				.catch(() => {
					alert('mise à jour impossible pour le moment');
					this.$router.push('http://localhost:8080');
				});
		},
	},

	mounted() {
		axios.get('http://localhost:3000/api/auth/2').then((response) => (this.pseudo = response.data.username));
		axios.get('http://localhost:3000/api/auth/2').then((response) => (this.email = response.data.email));
		axios.get('http://localhost:3000/api/auth/2').then((response) => (this.bio = response.data.bio));
		axios.get('http://localhost:3000/api/auth/2').then((response) => (this.imageProfil = response.data.imageUrl));
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

<style lang="scss">
/******************************************************body ***************************************/
#button__suppressioncompte {
	margin-bottom: 50px;
	width: 200px;
	height: 70px;
	border-radius: 15px;
	background-color: rgb(238, 96, 96);
	color: #000;
}
#registerProfil {
	display: none;
}

#button_valid {
	margin-bottom: 50px;
	margin-right: 20px;
	width: 180px;
	border-radius: 15px;
}
.changement {
	width: 50%;

	margin-left: 10px;
	margin-bottom: 10px;
}
.validation {
	width: 50%;

	margin: auto;
	display: flex;
	flex-wrap: wrap;
}
.titreProfil {
	font-size: 1.8rem;
	font-weight: bolder;
}
.partOne {
	display: flex;
	margin-bottom: 20px;
}
.emailProfil,
.votreBio,
.pseudol,
.modifProfil {
	font-size: 1.4rem;
	font-family: 'Courier New', Courier, monospace;
	font-weight: bold;
	text-align: left;
	margin-bottom: 20px;
	justify-content: space-around;
}

.lesInfos {
	font-family: cursive;
}

.photoProfil {
	width: 45%;
	border: 1rem solid pink;
	margin-right: 10px;
}

.infoProfil {
	width: 45%;
	padding: 10px;
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

.modifProfil2 {
	text-align: left;
}
#newEmail,
#newPseudo,
#newPassword2,
#newPassword,
#modifProfil,
#newBio {
	height: 30px;
	width: 200px;
	border-radius: 2px;
	text-align: left;
}

button:hover,
a:hover {
	opacity: 0.7;
}

#photoProfil {
	width: 150px;
}
</style>
