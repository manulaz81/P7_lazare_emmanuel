
<template>
			<form id="formulaire" action="http://www.yahoo.fr" method="post" novalidate="">
				<p v-if= "pseudo">Inscription</p>
     

				<p>Vous n'avez pas compte ?</p>
				<p >Inscrivez-vous !</p>

				<p><label for="email">Email</label></p>
				<p><input id="email" type="email" name="email" placeholder="votre email" /></p>
				<span>Email non valide !</span>

				<p><label for="password">Password</label></p>
				<p><input id="email" type="email" name="email" placeholder="votre mot de passe" /></p>
				<span>password non valide !</span>

				<p>	<label for="name">Pseudo</label></p>				
				<p>	<input id="name" type="text" name="name" placeholder="votre nom d'utilisateur" /></p>
				<span>pseudo déjà utilisé !</span>
				
				<button v-on:click="updatePost()">S'inscrire</button>
			<p>{{posts}}</p>
</form>

</template>

<script>

// import axios from 'axios'

export default {
    name : 'register', 	
	
	

// 	methods : {
// updatePost() {
// 					axios
// 						.get('http://localhost:3000/api/messages')
// 						.then((response) => (this.posts = response.data))
						
// 				},

// 	}
    
    }




</script>

			
		<style> -->
			<!-- #app {
				text-align: center;
				border: 1px solid black;
        border-radius: 10px;
				width: 30%;
				vertical-align: center;
				color: black;
				font-size: rem;
        background-color: cadetblue;
			}
		</style>
