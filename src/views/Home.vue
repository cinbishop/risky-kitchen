<template>
    <span>
        <v-container grid-list-xl>
            <v-row>
                <v-col :cols="12" :md="8">
                    <article-list></article-list>
                </v-col>
                <v-col :cols="12" :md="4">
                    <app-sidebar></app-sidebar>
                </v-col>
            </v-row>
        </v-container>
    </span>
</template>

<script>
import ArticleList from '@/components/ArticleList';
import AppSidebar from '@/components/AppSidebar';

export default {
    name: 'home',
    components: {
        ArticleList,
        AppSidebar
    }
};
</script>
