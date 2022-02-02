<template>


  <div id="registre">
     <p>Bienvenue sur le réseau social de l'entreprise Groupomania</p>
     <img id="photo_logo" alt="Vue logo" src="../assets/icon.png">
    <register/>
    
    <!-- <profile/> -->
    
  </div>
</template>

<script>
import register from '@/components/register.vue'



export default {
  name: '#registre',
  components: {
    register,
  }
}
</script>

<style scoped>
#photo_logo {
width : 110px;

  }
</style>