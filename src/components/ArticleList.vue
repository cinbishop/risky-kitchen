<template>
	<v-row dense>
		<v-col v-for="(entry) in entries" :key="entry.id" :cols="12" :md="6">
			<article-card :entry="entry"></article-card>
		</v-col>
	</v-row>
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
			let filteredPosts = [];
			Object.keys(BlogEntries).map(section=>{
				for (let blog of BlogEntries[section]) {
					if(this.$route.path == '/') {
						filteredPosts.push(blog)
					}
					else if(section == this.$route.path.replace(/\//g, '')) {
						filteredPosts.push(blog);
					} else {
						for (let tag of blog.tags) {
							if(tag == this.$route.path.replace('/tags/','')) {
								filteredPosts.push(blog);
							}
						}							
					}
				}
			});
			return filteredPosts;
		}
	}
};
</script>
