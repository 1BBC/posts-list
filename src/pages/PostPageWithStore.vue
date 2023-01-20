<template>
  <h2 class="bottom_indent">Post page with vuex</h2>
  <my-box class="page_actions bottom_indent">
    <my-button @click="showDialog">Create post</my-button>
    <my-button @click="fetchPosts">Fetch posts</my-button>
  </my-box>

  <my-box class="bottom_indent">
    <h3>Search</h3>
    <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        name="searchQuery"
        placeholder="search"
    ></my-input>
  </my-box>

  <my-box class="bottom_indent">
    <h3>Sort</h3>
    <my-select
        :options="sortOptions"
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
    />
  </my-box>

  <my-dialog v-model:show=dialogVisible >
    <post-form
        @createPost="createPost"
    />
  </my-dialog>

  <post-list
      :posts="sortedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
  />
  <my-alert-box v-else :heading="'Loading...'"/>

  <div class="wrapper">
    <div
        v-for="pageNum  in totalPages"
        :key="pageNum"
        class="page"
        :class="{
          'current-page': pageNum === page
        }"
        @click="setPage(pageNum)"
    >
      {{pageNum}}
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(item => item.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
    // console.log(this.$store.state);
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      searchQuery:state => state.post.searchQuery,
      selectedSort: state => state.post.selectedSort,
      page: state => state.post.page,
      totalPages: state => state.post.totalPages,
      limit: state => state.post.limit,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
    }),
  },
  watch: {
    page(newValue) {
      this.fetchPosts();
    },
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
