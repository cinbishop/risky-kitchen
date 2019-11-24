<template>
	<span>
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
		}
	}
};
</script>