<template>
    <v-card flat color="grey lighten-3">
        <div class="entry">
            <v-img
                class="white--text align-end"
                height="400px"
                :src="'/assets/posts/' + entry.image"
            >
                <v-card-title
                    style="word-break:break-word; background-color:rgba(0,0,0,0.7)"
                    class="headline font-weight-bold"
                    @click="$router.push({ name: entry.id })"
                >
                    {{ entry.title }}
                </v-card-title>
            </v-img>
            <v-card-subtitle style="word-break:break-word;" class="pb-0">{{
                entry.date
            }}</v-card-subtitle>
            <v-card-text class="text--primary pb-0">{{
                entry.description
            }}</v-card-text>
            <v-card-actions>
                <v-btn
                    color="black"
                    text
                    @click="$router.push({ name: entry.id })"
                    >Read More</v-btn
                >
            </v-card-actions>
            <v-card-actions>
                <v-chip
                    class="ma-1"
                    label
                    small
                    v-bind:disabled="isDisabled(tag)"
                    v-for="tag in entry.tags"
                    :key="tag"
                    @click="$router.push({ name: tag })"
                    >{{ tag }}</v-chip
                >
            </v-card-actions>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'ArticleCard',
    methods: {
        isDisabled(tag) {
            return this.$route.path.replace('/tags/', '') == tag ? true : false;
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
