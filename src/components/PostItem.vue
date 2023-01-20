<template>
  <my-box class="post bottom_indent">

    <div><small style="color: white" v-random-color="'background-color'">{{post.id}}.</small> <strong >{{post.title}}</strong></div>
    <div><p>{{post.body}}</p></div>
    <div class="post_actions">
      <router-link :to="{name: 'post-view', params: {id: post.id}}">
        <my-button>View</my-button>
      </router-link>
      <my-button @click="$emit('remove', post)">Delete</my-button>
    </div>
  </my-box>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
  .post_actions {
    margin-top: 5px;
    display: flex;
    justify-content: right;
  }
</style>