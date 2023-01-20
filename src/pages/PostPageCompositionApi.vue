<template>
  <h2 class="bottom_indent">Post page with composition API</h2>
  <my-box class="bottom_indent">
    <h3>Search</h3>
    <my-input
        v-model="searchQuery"
        name="searchQuery"
        placeholder="search"
    ></my-input>
  </my-box>

  <my-box class="bottom_indent">
    <h3>Sort</h3>
    <my-select
        :options="sortOptions"
        v-model="selectedSort"
    />
  </my-box>
  <post-list
      :posts="sortedPosts"
      v-if="!isPostsLoading"
  />
  <my-alert-box v-else :heading="'Loading...'"/>
</template>

<script>
import PostList from "@/components/PostList.vue";
import {usePosts} from "@/hooks/usePosts.js";
import {useSortedPosts} from "@/hooks/useSortedPosts.js";

export default {
  components: {
    PostList
  },
  data() {
    return {
      sortOptions: [
        {value: "title", name: "By title"},
        {value: "body", name: "By body"},
      ],
    }
  },
  setup(props) {
    const {posts, isPostsLoading, totalPages} = usePosts(10);
    const {selectedSort, searchQuery, sortedPosts} = useSortedPosts(posts);
    return {
      posts,
      isPostsLoading,
      totalPages,
      sortedPosts,
      selectedSort,
      searchQuery
    }
  }
}
</script>

<style scoped>
.page_actions {
  display: flex;
  justify-content: center;
}

.bottom_indent {
  margin-bottom: 5px;
}

.wrapper {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}

.current-page {
  background-color: black;
  color: white;
}
</style>
