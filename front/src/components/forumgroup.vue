<template>
	<div class="forumgroup">
		<div class="message_Group" v-for="m in allMessage" :key="m.allMessage">
			<div class="message_group1">
				<div class="message_group2">
					<div class="message_caract">
						<div class="message_nom">mess de {{ m.idMessage }}</div>
						<div class="message_date">posté le {{ m.createdAt }}</div>
					</div>
					<div class="message_group">{{ m.message }}</div>
				</div>

				<button class="btn_supp">supprimer</button>
			</div>
			<button class="btn_rep">Répondre {{}}</button>
		</div>
	
		<form id="register" method="post" v-on:submit="sendMessage">
			<div class="message_perso">
				<div>
					<p><label for="pseudo">Votre commentaire</label></p>
					<p class="messagSend">
						<input id="newMessage" type="text" name="email" placeholder="message" v-model="message" />
					</p>
				</div>
				<div>
					<p><label for="image">joindre une image</label></p>
					<p><input id="newPhoto" type="file" name="email" /></p>
				</div>

				<button id="button_valid">envoyer</button>
			</div>
		</form>

		<!-- les modifications de profil -->
	</div>
</template>
<script>
import axios from 'axios';
export default {
	name: 'forumgroup',

	data() {
		return {
			message: '',
			imageMessage: '',
			commentaire: ' ',
			allMessage: '',
		};
	},
	mounted() {
		axios
			.get('http://localhost:3000/api/messages')
			.then((response) => (this.allMessage = response.data))
			.catch((error) => error);
	},

	methods: {
deleteMessage(){


},

		sendMessage() {
			axios
				.post('http://localhost:3000/api/messages', {
					message: this.message,
				})
				.then((res) => {
					console.log(res);
					alert('Votre commentaire est parti!');
					this.$router.push('http://localhost:8080/forum');
				})
				.catch(() => {
					alert('impossible');
					this.$router.push('http://localhost:8080/forum');

					console.error('Do that');
					// .catch((erreur) => (this.posts = [{ id: 'erreur de chargement' }]));
				});
		},
	},
};
</script>

<style scoped>
.card {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	max-width: 300px;
	margin: auto;
	text-align: center;
}
.message_Group {
	border: 1px solid black;
	margin-top: 15px;
}
.message_perso {
	display: flex;
}

#register {
	margin-top: 20px;
}
.message_date {
	text-align: right;
}
.message_group {
	background-color: aliceblue;
}
.title {
	color: grey;
	font-size: 18px;
}
.message_caract {
	display: flex;

	justify-content: space-around;
	font-size: 0.8rem;
	background-color: grey;
	border-bottom: 1px solid black;
}
.message_group2 {
	width: 80%;
}
#button_valid {
	width: 20%;
}
.btn_supp {
	width: 20%;
	background-color: gray;
	border: 1px solid black;
}

.message_group1 {
	display: flex;
	justify-content: space-around;
}

.messagSend {
	width: 180px;
}
#register {
	border: 1px solid black;
}
/* #newPhoto{
  width : 20%;
} */

button {
	border: none;
	outline: 0;
	display: inline-block;
	padding: 8px;
	color: white;
	background-color: #000;
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

#commentId {
	background: purple;

	width: 50%;
}

#messageId {
	background: grey;

	width: 50%;
}
</style>
