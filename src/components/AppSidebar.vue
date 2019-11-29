<template>
	<span>
		<v-row dense>
			<v-col :col="12">
				<div class="funny-box">
					<v-img :src="('/assets/logo.svg')">
						<div class="funny-box--text text-center">
							<span class="headline font-weight-black mb-2">Your Ad Here</span>
							<span class="subtitle-1 font-weight-normal">{{getShillMessage}}</span>
						</div>
					</v-img>
				</div>
			</v-col>
		</v-row>
		<recent-articles :recentEntries="recentEntries"></recent-articles>
		<tag-list :tags="getTags"></tag-list>
	</span>
</template>

<script>
import BlogEntries from '@/statics/data/blogs.json';
import RecentArticles from '@/components/RecentArticles';
import TagList from '@/components/TagList';

export default {
	name: 'AppNavigation',
	components: {
		RecentArticles,
		TagList
	},
	computed: {
		recentEntries() {
			return BlogEntries.post.slice(0,3);
		},
		getTags() {
			let tagArr = [];

			for (var blog of BlogEntries.post) {
    			for (var tag of blog.tags) {
      				if(!~tagArr.indexOf(tag)) {
        				tagArr.push(tag)
      				}
    			}
  			}

  			return tagArr;
		},
		getShillMessage() {
			let shillsArr = [
				`Risky.Kitchen has never met a product it couldn't shill for.`,
				`We don't give a shit. Whatever you're selling, we're selling it too.`,
				`We've been happily running autoplaying video ads since 2019. Just sayin'`,
				`Every MLM has to start somewhere. Why not start yours today on Risky.Kitchen.`,
				`Adblockers are just the customers way of playing hard to get.`,
				`Why even have a website if you aren't going to hawk shit on it? We'll sell anything.`,
				`These hosting fees won't pay themselves! And God knows we don't want to.`,
				`If we don't sell ads then we can't sell R.K Pro subscriptions. And that would be fucked up.`,
				`If we don't monetize this monumental waste of time soon, we'll have to all get real jobs.`,
				`HELP. THEY'VE CHAINED ME TO A RADIATOR AND ARE FORCING ME WRITE THESE. SEND HELP.`,
				`The marketing department made us code this and those guys basically run the place, so...`
			];
			let randomShill = shillsArr[Math.floor(Math.random()*shillsArr.length)];
			return randomShill;
		}
	}
};
</script>

<style>
.funny-box {
	background-color: #ccc;
}
.funny-box .v-image__image {
	background-size: auto;
	opacity: 0.2;
}
.funny-box .funny-box--text {
	background-color: rgba(255,255,255,0.6);
	position: relative;
	top: 50%;
	-webkit-transform:translateY(-50%);
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	padding: 25px;
}
.funny-box .funny-box--text span {
	display: block;
	line-height: 1.2;
}
</style>