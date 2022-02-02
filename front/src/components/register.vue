
<template>
			<form id="formulaire" action="https://www.yahoo.com" method="post" novalidate="">
				<p v-if= "pseudo">Inscription</p>
     

				<p>Vous n'avez pas compte ?</p>
				<p >Inscrivez-vous !</p>

				<p><label for="email">Email</label></p>
				<p><input id="email" type="email" name="email" placeholder="votre email" /></p>

				<p><label for="password">Password</label></p>
				<p><input id="email" type="email" name="email" placeholder="votre mot de passe" /></p>
				
				<p>	<label for="name">Pseudo</label></p>
				<p>	<input id="name" type="text" name="name" placeholder="votre nom d'utilisateur" /></p>
				
				
				<button v-on:click="updatePost()">S'inscrire</button>

</form>

</template>

<script>
export default {
    name : 'register', 
    
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
