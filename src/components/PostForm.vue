<template>
  <my-box class="post-add">
    <h3>Create new post</h3>
    <form @submit.prevent>
      <my-input
          v-model.trim="post.title"
          name="title"
          placeholder="Title"
      ></my-input>
      <my-input
          v-model.trim="post.body"
          name="body"
          placeholder="Body"
      ></my-input>
      <my-button @click="create">Create</my-button>
    </form>
  </my-box>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    create() {
      this.post.id = Date.now();
      this.$emit('createPost', this.post);
      this.post = {
        id: 0,
        title: '',
        body: ''
      }
    },
  }
}
</script>

<style scoped>

</style>