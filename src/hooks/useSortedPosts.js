import axios from "axios";
import {computed, ref} from "vue";

export function useSortedPosts(posts) {
    const selectedSort = ref('');
    const searchQuery = ref('');
    const sortedPosts = computed(() => {
        return [...posts.value].sort((post1, post2) => {
            return post1[selectedSort.value]?.localeCompare(post2[selectedSort]);
        }).filter(post => {
            return post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
                || post.body.toLowerCase().includes(searchQuery.value.toLowerCase())
        });
    })

    return {
        selectedSort, sortedPosts, searchQuery
    }
}