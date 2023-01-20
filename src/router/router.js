import {createRouter, createWebHistory} from "vue-router";
import Main from "../pages/Main.vue";
import PostPage from "../pages/PostPage.vue";
import PostView from "../pages/PostView.vue";
import PostPageWithStore from "../pages/PostPageWithStore.vue";
import PostPageCompositionApi from "../pages/PostPageCompositionApi.vue";

const routes = [
    {
        path: '/',
        component: Main,
        name: 'main',
    },
    {
        path: '/posts',
        component: PostPage,
        name: 'post-page',
    },
    {
        path: '/posts-store',
        component: PostPageWithStore,
        name: 'post-page-with-store',
    },
    {
        path: '/posts-composition',
        component: PostPageCompositionApi,
        name: 'post-page-composition',
    },
    {
        path: '/post/:id',
        component: PostView,
        name: 'post-view',
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;