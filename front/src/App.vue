<template>
  <div id="nav"> 

    <router-link to="/">Connexion</router-link> |
    <router-link to="/about">S'incrire</router-link> |
    <router-link to="/profile">Profil</router-link> |
    <router-link to="/forum">Forum</router-link>    
  
  <router-view/>
  
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   margin: auto;
//   text-align: center;
// width: 650px;
//   color: #2c3e50;
// }

#nav {
  padding: 10px;
  margin: auto;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #dda3d0;
    }
  }
}
</style>
