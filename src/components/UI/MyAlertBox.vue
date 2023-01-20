<template>
  <my-box class="alert">
    <h3>{{this.heading}}</h3>
    <p>{{this.body}}</p>
  </my-box>
</template>

<script>
import MyBox from "./MyBox.vue";

export default {
  name: 'my-alert-box',
  components: {MyBox},
  props: {
    heading: [String],
    body: [String]
  }
}
</script>

<style scoped>
.alert {
  background-color: aliceblue;
}
</style>
