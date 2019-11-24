<template>
	<span>
		<v-app-bar collapse-on-scroll dense app color="grey lighten-3" flat>
			<v-container mx-auto>
				<v-row align="center">
					<router-link to="/">
						<v-img :src="('/assets/logo.png')" class="mr-5 ml-2" contain height="40" width="40" max-width="40" />
					</router-link>
					<v-toolbar-title>
						<router-link to="/" class="toolbar-title" align="center">
							{{appTitle}}
						</router-link>
					</v-toolbar-title>
				</v-row>
			</v-container>
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
.toolbar-title {
	color: inherit;
	text-decoration: inherit;
	font-weight: bold;
}
</style>