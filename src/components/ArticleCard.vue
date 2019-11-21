<template>
	<v-card>
		<div class="entry">
			<v-img class="white--text align-end" height="400px" :src="entry.image">
				<v-card-title @click="$router.push({name: entry.id})">
					{{entry.title}}
				</v-card-title>
			</v-img>
			<v-card-subtitle class="pb-0">{{entry.date}}</v-card-subtitle>
			<v-card-text class="text--primary">{{entry.description}}</v-card-text>
			<v-card-actions>
				<v-btn color="purple" text @click="$router.push({name: entry.id})">Read More</v-btn>
			</v-card-actions>
			<v-divider></v-divider>
			<v-card-actions>
				<v-chip class="ma-2" v-bind:disabled="isDisabled(tag)" v-for="(tag) in entry.tags" :key="tag" @click="$router.push({name: tag})">{{tag}}</v-chip>
			</v-card-actions>
		</div>
	</v-card>
</template>

<script>
	export default {
		name: 'ArticleCard',
		methods: {
			isDisabled(tag) {
				return this.$route.path.replace('/tags/','') == tag ? true : false;
			}
		},
		props: {
			entry: {
				type: Object,
				required: true
			}
		}
	};
</script>