<template>
	<span>
		<v-app-bar collapse-on-scroll dense app color="grey lighten-3" flat>
			<v-container mx-auto>
				<v-row align="center">
					<router-link to="/">
						<v-img :src="('/assets/logo.svg')" class="mr-5 ml-3" contain height="44" width="44" max-width="44" />
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
.v-toolbar.v-toolbar--collapsed {
	-webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
	box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
}
</style>