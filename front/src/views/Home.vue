<template>
  <div class="Home">
    <p>Bienvenue sur le réseau social de l'entreprise Groupomania</p>
    <img id="photo_logo" alt="Vue logo" src="../assets/icon.png">
<!-- <p>Nous sommes le {{$store.getters.formattedDate}}</p> -->
    
    <!-- <button @click="incrementMonth">incrémenter</button> -->

<login/>
<!-- 
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import login from '@/components/login.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    login
  },
methods : {

				updatePost() {
					axios
						.get('http://localhost:3000/api/messages')
						.then((response) => (this.posts = response.data))
					
				},
}
}

</script>


<style scoped>
#photo_logo {
width : 110px;

  }
</style>
