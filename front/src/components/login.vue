
<template>
			<form id="formulaire" action="http://www.yahoo.fr" method="post" novalidate="">
				<p v-if= "pseudo">Inscription</p>
        <p v-else>Connectez vous avec vos identifiants</p>				

				<p><label for="email">Email</label></p>
				<p><input id="email" type="email" name="email" placeholder="votre email" /></p>

				<p><label for="password">Password</label></p>
				<p><input id="email" type="email" name="email" placeholder="votre mot de passe" /></p>
				
				<button id="button_inscrit" v-on:click="updatePost">Se connecter</button>
				

</form>

</template>

<script>
import axios from 'axios'
export default {


    name : 'login',
	methods : {updatePost() {
		
					axios
						.post('http://localhost:3000/api/signUp')
						.then((response) => console.log(response.data))
						// .catch((erreur) => (this.posts = [{ id: 'erreur de chargement' }]));
				},
		
	} 
    
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
