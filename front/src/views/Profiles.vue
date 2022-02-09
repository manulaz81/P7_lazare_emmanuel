<template>
	<div id="profil">
		<navigation />

		<profile />
	</div>
</template>

<script>
import profile from '@/components/profile.vue';
import navigation from '@/components/navigation.vue';

export default {
	name: '#profil',
	components: {
		profile,
		navigation,
	},
};
</script>

<style scoped>
#photo_logo {
	width: 110px;
}
</style>
