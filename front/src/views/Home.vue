<template>
  <div class="Home">
    <p>Bienvenue sur le réseau social de l'entreprise Groupomania</p>
    <img id="photo_logo" alt="Vue logo" src="../assets/icon.png">
<login/>
<!-- 
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import login from '@/components/login.vue'


export default {
  name: 'Home',
  components: {
    login
  }
}
</script>


<style scoped>
#photo_logo {
width : 110px;

  }
</style>
