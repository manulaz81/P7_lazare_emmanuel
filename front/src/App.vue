<template>
	<div id="reseau">
		<!-- a remettre par la suite -->
    
		<!-- <router-link to="/">Connexion</router-link> |
    <router-link to="/about">S'incrire</router-link> | -->

		<router-view />
	</div>
</template>

<style lang="scss">
#reseau {
	margin-top: 20px;
	margin: auto;
	width: auto;
}

#app {
	border: 1px solid pink;
	border-radius: 10px;
	margin: auto;
	margin-top: 30px;
	width: 1050px;
	max-width: 1150px;
	color: black;
	font-size: rem;
	background-color: rgb(246, 246, 246);
	text-align: center;
	border-radius: 10px;
  vertical-align: center;	
	min-width: 370px;
};
@media screen and (min-width: 768px) and (max-width: 1024px){
body {

	max-width: 800px;
}

}


@media screen and (max-width: 767px){


}


</style>
