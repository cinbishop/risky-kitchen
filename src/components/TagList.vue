<template>
	<v-row dense>
		<v-col :cols="12">
			<v-subheader class="pl-4 font-weight-bold title black--text">Tags</v-subheader>
			<v-divider></v-divider>
			<v-chip-group column>
				<v-chip v-for="tag in tags" :key="tag" @click="$router.push({name: tag})" v-bind:disabled="isDisabled(tag)" label>
					{{tag}}
				</v-chip>
			</v-chip-group>
		</v-col>
	</v-row>
</template>

<script>

export default {
	name: 'ArticleList',
	methods: {
		isDisabled(tag) {
			return this.$route.path.replace('/tags/','') == tag ? true : false;
		}
	},
	props: {
		tags: {
			type: Array,
			required: true
		}
	}
};
</script>
