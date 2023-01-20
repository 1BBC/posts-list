<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  background: none;
  border: 2px solid black;
  margin: 0 1px;
  cursor: pointer;
  padding: 5px;
}

.btn:hover {
  background-color: aliceblue;
}
</style>
