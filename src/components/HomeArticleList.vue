<template>
	<v-container fluid>
		<div class="sections">
			<div v-for="(section,index) in Object.keys(entries)" :key="index" class="group">
				<v-row dense>
					<v-col :cols="12">
						<h2 class="center">{{section}}</h2>
					</v-col>
					<v-col v-for="(entry, pos) in entries[section]" :key="entry.id" :cols="pos == 0 ? '12' : '6'">
						<article-card :entry="entry"></article-card>
					</v-col>
				</v-row>
			</div>
		</div>
	</v-container>
</template>

<script>
import BlogEntries from '@/statics/data/blogs.json';
import ArticleCard from '@/components/ArticleCard';



export default {
	name: 'HomeArticleList',
	components: {
		ArticleCard
	},
	computed: {
		entries() {
			return BlogEntries
		}
	}
};
</script>
