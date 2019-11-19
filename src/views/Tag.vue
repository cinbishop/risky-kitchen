<template>
	<span>
		<v-container fluid>
			<v-row dense>
				<v-col :cols="12" :md="9">
					<article-list></article-list>
				</v-col>
			</v-row>
		</v-container>
	</span>
</template>

<script>
import ArticleList from '@/components/ArticleList';

export default {
    name: 'tag',
    components: {
    	ArticleList
    }
};
</script>
