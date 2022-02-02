<template>
 <div class="card">
  <img src="/src/assets/logo.png" alt="photoProfil" style="width:100%">
  <p>votre email</p>
  <p>votre pseudo</p>
  <p>votre biographie</p> 
 <!-- les modifications de profil -->
 <p>Mettre à jour son profil</p>
 <p>modifier votre photo de profil</p>
  <input id="newPhoto">
  <p>modifier votre email</p>
  <input id="newMail">
  <p>modifier votre pseudo</p>
 <input id="newPseudo">

  <p>modifier votre biographie</p>
 <input id="newBio">
  <p><button>Valider vos modifications</button></p>
</div>


</template>
<script>
export default {
    name : 'profile', 
    
    }
</script>


<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>