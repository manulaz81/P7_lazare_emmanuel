<template>
 <div class="forumgroup">
  <div id="messageId">

  <p>{{message}}</p>
  <img src="/src/assets/logo.png" alt="photo" style="width:100%">
  <p>envoyé par {{iduser}}</p>
  <p>le </p> 
  </div>

  <div id="commentId">

  <p>commentaire post</p>  
  <p>envoyé par Pseudo</p>
  <p>le </p> 
  </div>
<form action="/ma-page-de-traitement" method="post" v-on:click="sendMessage">   
    <div>
        <label for="file">fichier:</label>
        <input type="file" id="fichier" name="user_fichier">
    </div>
    <div>
        <label for="msg">Message :</label>
        <textarea id="msg" name="user_message"></textarea>
    </div>
 <div class="button">
        <button type="submit"  >Envoyer le message</button>
    </div>

</form>



 <!-- les modifications de profil -->
 


</div>


</template>
<script>
import axios from 'axios';
export default {
    name : 'forumgroup'  ,
    
    data () {return {
			message: '',
      imageMessage : "",
			commentaire: ' ',
			
		}
    },
    methods:{
      sendMessage(){
const message2 = document.getElementById('msg').value
console.log(message2);

axios
				.post('http://localhost:3000/api/auth/messages/13', {
					message2: this.message,
				
				})

				.then((res) => {
					console.log(res);
					alert('Votre message  a bien été envoyé!');
					this.$router.push('http://localhost:8080/forum');
				})
				.catch(() => {
					alert('Votre message nest pas arrivé');
					this.$router.push('http://localhost:8080');

					console.error('Do that');
					// .catch((erreur) => (this.posts = [{ id: 'erreur de chargement' }]));
				});














this.message = message2;
alert("post fait !!")


      }

    }
    
    
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