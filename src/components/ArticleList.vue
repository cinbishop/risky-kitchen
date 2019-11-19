<template>
	<v-container fluid>
			<v-row dense>
				<v-col v-for="(entry) in entries" :key="entry.id" :cols="6">
					<article-card :entry="entry"></article-card>
				</v-col>
			</v-row>
	</v-container>
</template>

<script>
import BlogEntries from '@/statics/data/blogs.json';
import ArticleCard from '@/components/ArticleCard';



export default {
	name: 'ArticleList',
	components: {
		ArticleCard
	},
	computed: {
		entries() {
			var filteredPosts = [];
			Object.keys(BlogEntries).map(section=>{
				for (var blog of BlogEntries[section]) {
					for (var tag of blog.tags) {
						if(tag == this.$route.path.replace('/','') && !~filteredPosts.indexOf(tag)) {
							filteredPosts.push(blog);
						}
					}
				}
			});
			return filteredPosts;
		}
	}
};
</script>
