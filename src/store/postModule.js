import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostLoading: {
            type: Boolean,
            default: false
        },
        searchQuery: '',
        selectedSort: '',
        page: 1,
        totalPages: 0,
        limit: 10,
        sortOptions: [
            {value: "title", name: "By title"},
            {value: "body", name: "By body"},
        ],
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => {
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
            }).filter(post => {
                return post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
                    || post.body.toLowerCase().includes(state.searchQuery.toLowerCase())
            });
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setPostLoading(state, bool) {
            state.isPostLoading = bool;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setPage(state, page) {
            state.page = page;
        }
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setPostLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: state.limit,
                        _page: state.page
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data);
            } catch (e) {
                alert('Error');
            } finally {
                commit('setPostLoading', false);
            }
        }
    },
    namespaced: true
}