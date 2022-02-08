<template>
	<div class="forumgroup">
		<form id="registerForum" method="post" v-on:submit="sendMessage">
			<div class="message_perso">
				<p><label for="pseudo"></label></p>
				<p class="messagSend2">
					<input
						id="newMessageforum"
						type="text"
						name="email"
						placeholder="Laisser votre message ..."
						v-model="message"
					/>
				</p>
				<div class="fichierJoint">
					<div>
						<p><label for="image"></label></p>
						<p><input id="newPhoto" type="file" name="email" placeholder="une image" /></p>
					</div>

					<button id="button_valid">Publier</button>
				</div>
			</div>
		</form>

		<div class="message_Group" v-for="m in allMessage" :key="m.allMessage">
			<div class="message_group1">
				<div class="message_group2">
					<div class="message_caract">
						<div class="message_nom">mess de {{ m.idMessage }}</div>
						<div class="message_date">posté le {{ m.createdAt }}</div>
					</div>
					<div class="message_group">{{ m.message }}</div>
				</div>

				<button class="btn_supp" v-on:click="deleteMessage">X</button>
			</div>

			<form id="commentairePost" method="post" v-on:submit="sendComment">
				<div class="commentaires">Les commentaires des gens : {{}}</div>
				<input class="btn_rep" placeholder="Votre commentaire..." v-model="comments" />
				<button id="button_comments">envoi</button>
			</form>
		</div>

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
			comments: '',
		};
	},
	mounted() {
		axios
			.get('http://localhost:3000/api/messages')
			.then((response) => (this.allMessage = response.data))
			.catch((error) => error);
	},

	methods: {
		deleteMessage() {
			axios
				.delete('http://localhost:3000/api/messages/2710', {})
				.then((res) => {
					console.log(res);
					alert('Votre commentaire a ete supprimé!');
					this.$router.push('http://localhost:8080/forum');
				})
				.catch(() => {
					alert('vous n êtes pas à l origine de la publication vous ne pouvez pas supprimer le message');
					this.$router.push('http://localhost:8080/forum');

					console.error('Do that');
				});
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
				});
		},
		sendComment() {
			axios
				.post('http://localhost:3000/api/commantaires', {
					comments: this.comments,
				})
				.then((res) => {
					console.log(res);
					alert('le commentaire du commentaire est bien parti!');
					this.$router.push('http://localhost:8080/forum');
				})
				.catch(() => {
					alert('impossible de commenter, t ecris mal');
					this.$router.push('http://localhost:8080/forum');

					console.error('Do that');
				});
		},
	},
};
</script>

<style scoped>
#newMessageforum {
	height: 50px;
	width: 250px;
	margin-right: 10px;
}
.messageSend2 {
	margin: auto;
}

#button_comments {
	width: 50px;
	background-color: pink;
}
#commentairePost {
	text-align: left;
	margin-left: 15px;
}

#registerForum {
	margin-top: 20px;
	width: 350px;
	border: thick double rgb(228, 184, 191);
	border-radius: 10px;
}
.btn_rep {
	text-align: left;
	margin-top: 10px;
	margin-bottom: 10px;
}
.message_nom {
	font-weight: bold;
	font-size: 1rem;
	font-style: italic;
}

.forumgroup {
	width: 370px;
}
.fichierJoint {
	display: flex;
}
.card {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	max-width: 300px;
	margin: auto;
	text-align: center;
}
.message_Group {
	border: 1px solid black;
	margin-top: 15px;
	border-radius: 5px;
}
/* .message_perso {
	display: flex;
} */

.message_date {
	text-align: right;
	font-style: italic;
}
/* .message_group {
	background-color: aliceblue;
} */
.title {
	color: grey;
	font-size: 18px;
}
.message_caract {
	display: flex;
	margin-top: 5px;
	margin-bottom: 15px;
	justify-content: space-around;
	font-size: 0.8rem;
	background-color: rgb(246, 216, 221);
}
.message_group2 {
	width: 80%;
}
#button_valid {
	width: 20%;
	height: 35px;
	background-color: rgb(246, 216, 221);
	margin-bottom: 10px;
	border-radius: 5px;
}
.btn_supp {
	width: 15px;
	background-color: rgb(246, 216, 221);
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
