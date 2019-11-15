<template>
	<span>
		<v-app-bar app color="black" dark>
			<v-toolbar-title>{{appTitle}}</v-toolbar-title>
		</v-app-bar>
	</span>
</template>

<script>
export default {
	name: 'AppNavigation',
	data() {
		return {
			appTitle: 'Risky.Kitchen'
		};
	}
};
</script>

<style scoped>
</style>