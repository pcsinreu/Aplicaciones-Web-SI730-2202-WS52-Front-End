<template>
<div>Post</div>
</template>

<script>
export default {
  name: "Post",
  created() {
    console.log(localStorage.getItem("comments") )
  }
}
;
</script>

<style scoped>

</style>