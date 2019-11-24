<template>
	<v-row dense>
		<v-col :cols="12">
			<v-list dense color="grey lighten-3">
				<v-subheader class="pl-4 font-weight-bold title black--text">Recent Posts</v-subheader>
				<v-divider></v-divider>
				<v-list-item link two-line v-for="(blog) in recentEntries" :key="blog.id">
					<v-list-item-content @click="$router.push({name:blog.id})">
						<v-list-item-title>{{blog.title}}</v-list-item-title>
						<v-list-item-subtitle>{{blog.description}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-col>
	</v-row>
</template>

<script>

export default {
	name: 'ArticleList',
	props: {
		recentEntries: {
			type: Array,
			required: true
		}
	}
};
</script>

<style scoped>
.v-list {
	border-radius: 0;
}
</style>
