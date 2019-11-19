<template>
	<span>
		<home-hero></home-hero>
		<v-container fluid>
			<v-row dense>
				<v-col :cols="12" :md="9">
					<home-article-list></home-article-list>
				</v-col>
			</v-row>
		</v-container>
	</span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeArticleList from '@/components/HomeArticleList';

export default {
    name: 'home',
    components: {
    	HomeHero,
    	HomeArticleList
    }
};
</script>
