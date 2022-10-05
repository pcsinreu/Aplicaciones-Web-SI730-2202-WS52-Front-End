<script>

export default {
  name: "App"

};
</script>

<template>
  <nav class="flex flex-row gap-4"  >
    <router-link to="/login">Login</router-link>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/product">Product</router-link>
    <router-link to="/comments">Comment</router-link>
    <router-link to="/users">User</router-link>
    <router-link to="/post">Post</router-link>
  </nav>

  <main>
    <router-view />
  </main>

</template>

<style scoped>

</style>
