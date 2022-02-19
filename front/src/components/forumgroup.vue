<template>
	<div class="forumgroup">
		<form id="registerForum" method="post" v-on:submit="sendMessage" enctype="multipart/form-data">
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
						<p><input id="newPhoto" type="file" name="file" v-on:change="changeImage"/></p>
					</div>
					<!-- <div>{{mess}}</div> -->

					<button id="button_valid">Publier</button>
				</div>
			</div>
		</form>
		<div id="main">
			<input type="file" name="picture" id="picture" />
			<!-- Input text lié à une variable de vuejs pour le texte alternatif de l'image -->
			<input type="text" name="alt-picture" id="" placeholder="alt text" v-model="alt_text" />
			<!-- Le bouton d'envoi lié à une fonction d'envoi -->
			<button v-on:submit="sendMessage">Envoyer</button>
		</div>

		<div class="message_Group" v-for="m in allMessage" :key="m.allMessage">
			<div class="message_group1">
				<div class="message_group2">
					<div class="message_caract">
						<p class="photoUse">
							<img id="photoUser" src="../assets/photop.jpg" alt="photoProfil" style="width: 100%" />
						</p>
						<div class="message_nom">mess de {{ m.idMessage }}</div>
						<div class="message_date">posté le {{ m.createdAt }}</div>
						<input class="btn_supp" v-on:click="deleteMessage" type="checkbox" />supprimer le message
					</div>

					<div class="message_image">
						<img id="photoMessage" src="../assets/photop.jpg" alt="photoMessage" style="width: 100%" />
					</div>
					<div class="imageUsers">{{ imageMessage }}</div>
					<div class="message_group">{{ m.message }}</div>
					<div class="message_barre"></div>

					<!-- <div class="coeur"> -->
						<!-- <h1>Commentaires</h1>
						<div class="comment_all">
							<div class="comments">
								<div class="photoComment">
									<img id="photoUsercomment" src="../assets/photop.jpg" alt="photoProfil" style="width: 100%" />
								</div>
								<div class="comment_users1">
									<div class="comment_users">Message de l'users: {{ comments }}</div>
									<div class="postDate">date du post {{ createAt }}</div>
								</div>
							</div>

							<input class="btn_supp" v-on:click="deleteCommentaire" type="checkbox" />supprimer le message
						</div> -->
						<!-- <p @click="increment">{{ total }} personnes aiment votre commentaire</p>
						<p>{{ totalGeneral }}personnes aiment votre commentaire</p>
						<p>{{ doubleDuTotal }} est la population multiplie par 2</p> -->
					<!-- </div> -->
				</div>
			</div>

			<!-- <form id="commentairePost" method="post" v-on:submit="sendComment">
				<div class="commentaires">Les commentaires des gens : {{ commentsUser }}</div>
				<input class="btn_rep" placeholder="Votre commentaire..." v-model="comments" />
				<button id="button_comments">envoi</button>
			</form> -->
		</div>

		<!-- les modifications de profil -->
	</div>
</template>
<script>
import axios from 'axios';
export default {
	name: 'forumgroup',
	computed: {
		totalGeneral() {
			return this.$store.state.totalFromVuex;
		},
		doubleDuTotal() {
			return this.$store.getters.doubleDuTotal;
		},
	},

	props: ['mess', 'chose'],
	data() {
		return {
			message: '',
			imageMessage: 'null',
			commentaire: ' ',
			allMessage: '',
			comments: 'coucou',
			commentsUser: '',

			total: 0,
		};
	},

	mounted() {
		axios
			.get('http://localhost:3000/api/messages/')
			.then((response) =>(this.allMessage = response.data))
			.catch((error) => error);
	},

	methods: {



		increment() {
			this.total += 1;
			this.$store.commit('setTotalFRomVuex', (this.totalGeneral += 1));
		},
		deleteMessage() {
			axios
				.delete('http://localhost:3000/api/messages', {})
				.then((res) => {
					console.log(res);
					alert('Etes vous sur de supprimé le message?');
					this.$router.push('http://localhost:8080/forum');
				})
				.catch(() => {
					alert('vous n êtes pas à l origine de la publication vous ne pouvez pas supprimer le message');
					this.$router.push('http://localhost:8080/forum');

					console.error('Do that');
				});
		},
changeImage(event){
	this.imageMessage = event.target.files[0]
	console.log(event)
},
		sendMessage(e) {
			e.preventDefault();

			// let imageUrl = document.getElementById('newPhoto').files;
			let fd = new FormData();
			fd.append('image', this.imageMessage,this.imageMessage.name );
			fd.append('message', this.message);

			// const userId = id ;
			axios
				.post('http://localhost:3000/api/messages', fd)
				.then((res) => {
					console.log(res);
					alert('Votre message est parti!');
					this.$router.push('/forum');
				})
				.catch(() => {
					alert('envoi impossible');
					this.$router.push('/forum');
				});
		},
		sendComment() {
			axios
				.post('http://localhost:3000/api/commantaires/255', {
					comments: this.comments,
				})
				.then((res) => {
					console.log(res);
					alert('le commentaire du commentaire est bien parti!');
					this.$router.push('/forum');
				})
				.catch(() => {
					alert('impossible de commenter, t ecris mal');
					this.$router.push('/forum');
				});
		},
	},
};
</script>

<style lang="scss">
#photoUser {
	width: 20px;
	object-fit: cover;
	border-radius: 50px;
	padding: 5px;
}
.photoUse {
	width: 50px;
	margin-right: 15px;
}

#newMessageforum {
	height: 50px;
	width: 460px;
	margin-right: 10px;
}
.messageSend2 {
	margin: auto;
}

#button_comments {
	width: 70px;
	height: 35px;
	border-radius: 5px;
	margin-left: 20px;
	background-color: pink;
}
#commentairePost {
	text-align: left;
	margin-left: 15px;
}
.commentaires {
	text-align: left;
	font-family: 'Times New Roman', Times, serif;
}
#registerForum {
	margin-top: 20px;
	width: 740px;
	border: thick double rgb(228, 184, 191);
	border-radius: 10px;
}
.btn_rep {
	text-align: left;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 420px;
	height: 40px;
}
.message_nom {
	font-weight: bold;
	font-size: 1rem;
	font-style: italic;
}

.forumgroup {
	width: 750px;
	margin: auto;
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
	margin-left: 15px;
	text-align: right;
	font-style: italic;
}
.message_barre {
	width: 60%;
	border-bottom: solid 3px black;
	text-align: center;
	margin-top: 10px;
}

.title {
	color: grey;
	font-size: 18px;
}
.message_caract {
	display: flex;
	height: 56px;
	margin-top: 5px;
	margin-bottom: 15px;

	font-size: 0.8rem;
	background-color: rgb(246, 216, 221);
	align-items: center;
	padding: 0px;
}
.message_group2 {
	width: 100%;
	text-align: left;
	padding-left: 2px;
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
	// display: none;
}

.message_group1 {
	display: flex;
	justify-content: space-around;
	margin-bottom: 15px;
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

#photoMessage {
	width: 10%;
	max-width: 150px;
	max-height: 150px;
	border: 1rem solid pink;
	margin-right: 5px;
}

#photoUsercomment {
	max-width: 50px;
	max-height: 50px;
	border: 5px solid black;
	border-radius: 50px;
}

.comments {
	display: flex;
	align-items: center;
	background: rgb(235, 231, 231);
	width: 60%;
}

.comment_users1 {
	margin-left: 10px;
}

.comment_all {
	display: flex;
	align-items: center;
}
</style>
