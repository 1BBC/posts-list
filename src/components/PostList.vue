<template>
  <my-box class="post-list" v-if="posts.length > 0">
    <h3>Posts list</h3>
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </my-box>
  <my-alert-box v-else :heading="'No posts found'"></my-alert-box>
</template>

<script>
import PostItem from "./PostItem.vue";
import MyAlertBox from "./UI/MyAlertBox.vue";
export default {
  components: {MyAlertBox, PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.post-list-move {
  transition: transform 0.8s ease;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>