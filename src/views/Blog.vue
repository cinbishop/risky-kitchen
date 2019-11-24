<template>
    <div class="blog">
		<span>
			<v-container grid-list-xl>
				<v-row>
					<v-col :cols="12" :md="8">
        				<router-view></router-view>
        				<v-btn outlined label color="black" text @click="$router.go(-1)">Back</v-btn>
        			</v-col>
        			<v-col :cols="12" :md="4">
        				<app-sidebar></app-sidebar>
        			</v-col>
        		</v-row>
        	</v-container>
    	</span>
    </div>
</template>

<script>

import AppSidebar from '@/components/AppSidebar';

export default {
	name: 'blog',
	components: {
		AppSidebar
	}
};
</script>

<style>
.blog .hero-image {
	width: 100%;
	height: 100%;
	max-height: 350px;
	object-fit: cover;
}

.blog p:first-of-type {
	margin-top: 15px;
}
</style>