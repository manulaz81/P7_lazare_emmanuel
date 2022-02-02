<template>
<div>

<navigation/>
  <compteur/>
  <login/>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import compteur from './components/compteur.vue'
import login from './components/login.vue'
import navigation from './components/navigation.vue'

export default {
  name: 'App',
  components: {
    compteur,login,navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
