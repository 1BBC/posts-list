<template>
  <div class="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {Navbar}

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 95%;
}

html {
  display: table;
  margin: auto;
}

body {
  display: table-cell;
  vertical-align: top;
}

h3 {
  margin-bottom: 5px;
}

.bottom_indent {
  margin-bottom: 5px;
}
</style>