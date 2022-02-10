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
	color: black;
	font-size: rem;
	background-color: white;
	text-align: center;
	border-radius: 10px;
  vertical-align: center;	
	min-width: 370px;
}


// #nav {
//   padding: 10px;
//   margin: auto;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #dda3d0;
//     }
//   }
// }
</style>
