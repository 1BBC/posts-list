<template>
  <h2 class="bottom_indent">Post page</h2>
  <my-box class="page_actions bottom_indent">
    <my-button @click="showDialog">Create post</my-button>
    <my-button @click="fetchPosts">Fetch posts</my-button>
  </my-box>

  <my-box class="bottom_indent">
    <h3>Search</h3>
    <my-input
        v-model.trim="searchQuery"
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
        @click="changePage(pageNum)"
    >
      {{pageNum}}
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
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
    }
  },
  methods: {
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
    changePage(pageNum) {
      this.page = pageNum;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (e) {
        alert('Error');
      } finally {
        this.isPostLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      }).filter(post => {
        return post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            || post.body.toLowerCase().includes(this.searchQuery.toLowerCase())
      });
    }
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
