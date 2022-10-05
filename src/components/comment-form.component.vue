<template>
  <div class="flex flex-column gap-4 p-8">
    <router-link to="/comments">back</router-link>
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
import { CommentsServices } from "@/services/coments-api.service";
import { PostsServices } from "@/services/post-api.service";

export default {
  name: "comment.new",
  data() {
    return {
      id: 0,
      body: "",
      seletedPost: "",
      posts: null,
      commentsServices: new CommentsServices(),
      postsServices: new PostsServices()
    };
  },
  methods: {
    save: function() {
      if (this.id == 0) {
        this.new();
      } else {
        this.edit();
      }
    },
    edit: function() {
      this.commentsServices.putComment(this.id, this.body, this.seletedPost.id).then(
        this.$router.push("/comments")
      );
    },
    new: function() {
      this.commentsServices.postComment(this.body, this.seletedPost.id).then(
        this.$router.push("/comments")
      );
    }
  },
  created() {

    this.postsServices.getPots()
      .then(response => {
        this.posts = response.data;
      });

  },
  mounted() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.commentsServices.getCommentById(this.id).then(response => {
          this.body = response.data.body;
          this.seletedPost = this.posts.find(post => post.id === response.data.postId);
        }
      );
    }
  }
}
;


</script>

<style scoped>

</style>