<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-box'
}
</script>

<style scoped>
.box {
  padding: 15px;
  border: 3px solid black;
}
</style>
