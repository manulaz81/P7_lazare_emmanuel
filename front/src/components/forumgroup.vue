<template>
 <div class="forumgroup">
  <div id="messageId">

  <p>votre post</p>
  <img src="/src/assets/logo.png" alt="photo" style="width:100%">
  <p>envoyé par Pseudo</p>
  <p>le </p> 
  </div>

  <div id="commentId">

  <p>commentaire post</p>  
  <p>envoyé par Pseudo</p>
  <p>le </p> 
  </div>

 <!-- les modifications de profil -->
 


 <input id="Message" placeholder="Envoyer un message">
  <p><button>Valider </button></p>
</div>


</template>
<script>
export default {
    name : 'forumgroup' 
    
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

#commentId{
background: purple;

width : 50%;

    }

#messageId{background: grey;

width : 50%;
    } 
</style>