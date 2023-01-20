<template>
  <div v-if="!isPostLoading">
    <my-box class="bottom_indent">
      <h1>Post #{{post.id}} {{post.title}}</h1>
      <p>{{post.body}}</p>
    </my-box>
    <my-back-button/>
  </div>
  <my-alert-box v-else :heading="'Loading...'"/>

</template>

<script >
import fetchPostMixin from "../mixins/fetchPostMixin.js";

export default {
  mixins: [fetchPostMixin],
}
</script>