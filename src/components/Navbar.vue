<template>
  <div class="navbar">
    <div class="actions">
      <hr>
      <router-link :to="{name: 'main'}">
        <my-button>Main</my-button>
      </router-link>
      <router-link :to="{name: 'post-page'}">
        <my-button>Posts</my-button>
      </router-link>
      <router-link :to="{name: 'post-page-with-store'}">
        <my-button>Posts with store</my-button>
      </router-link>
      <router-link :to="{name: 'post-page-composition'}">
        <my-button>Posts with composition API</my-button>
      </router-link>
      <hr>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar {
  /*height: 50px;*/
  background-color: ;
  display: flex;
  justify-content: center;
}
</style>