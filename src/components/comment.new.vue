<template>

  <div class="flex flex-column gap-4 p-8">
    <router-link to="/comment">back</router-link>
    <form class="flex flex-column">
      <div class="field grid justify-content-center">
        <label for="body" class="col-2">Body</label>
        <pv-inputText id="body" v-model="body" />
      </div>
      <div class="field grid justify-content-center">
        <label for="postId" class="col-2">post</label>
        <pv-dropdown v-model="seletedPost" :options="posts" optionLabel="title" placeholder="Select a post" />
      </div>
      <div class="field grid justify-content-center">
        <pv-button @click="save">Save</pv-button>
      </div>
    </form>
  </div>
</template>

<script>
import { CommentsServices } from "@/services/coments-services";
import { PostsServices } from "@/services/post-services";

export default {

  name: "comment.new",
  data() {
    return {
      body: "",
      seletedPost: "",
      posts: null,
      commentsServices: new CommentsServices(),
      postsServices: new PostsServices()
    };
  },
  methods: {
    save: function() {
      this.commentsServices.postComment(this.body, this.seletedPost.id).then(
        this.$router.push("/comment")
      );
    }
  },
  created() {
    console.log("id",this.$router)
    this.commentsServices.getCommentById(12).then(response => console.log(response))

    this.postsServices.getPots().then(response => {
      this.posts = response.data;
    });
  }

};
</script>

<style scoped>

</style>