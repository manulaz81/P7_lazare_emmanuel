<template>
	<div id="profil">
		<navigation />
		<profile />
		<!-- <test/> -->
		
	</div>
</template>

<script>
import profile from '@/components/profile.vue';
import navigation from '@/components/navigation.vue';
// import test from '@/components/testmessage.vue';

export default {
	name: '#profil',
	components: {
		profile,
		navigation
	},
};
</script>

<style lang="scss">
#photo_logo {
	width: 110px;
}
</style>
