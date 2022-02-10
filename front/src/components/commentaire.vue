<template>
	<div class="commentaires">
		<form id="commentairePost" method="post" v-on:submit="sendComment">
			<div class="commentaires">Les commentaires des gens : {{}}</div>
			<input class="btn_rep" placeholder="Votre commentaire..." v-model="comments" />
			<button id="button_comments">envoi</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'commentaires',

};
</script>

<style lang="scss"></style>
