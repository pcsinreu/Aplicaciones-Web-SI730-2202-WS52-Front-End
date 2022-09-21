<template>

  <router-link to="/comment">back</router-link>
  <form>
    <div class="field grid">
      <label for="body">Body</label>
      <InputText id="body" v-model="body" />
    </div>

    <div class="field grid">
      <label for="postId" >post</label>
      <pv-dropdown  v-model="seletedPost"  :options="posts" optionLabel="title" placeholder="Select a post" />
    </div>

      <pv-button @click="save"  >Save</pv-button>
  </form>

</template>

<script>
import { CommentsServices } from "@/services/coments-services";
import { PostsServices } from "@/services/post-services";

export default {

  name: "comment.new",
  data(){
    return{
      body: "",
      seletedPost: "",
      posts: null
    }
  },
  methods: {
    save: function(){
      debugger
      console.log("body",this.body)
      console.log("id",this.seletedPost.id)

      new CommentsServices().postComment(this.body,this.seletedPost.id ).then(
        //console.log("commentario correctamente grabado")
        //Retornar
        this.$router.push('/comment')
      )
    }
  },
  created() {
    new PostsServices().getPots().then(response => {
      this.posts = response.data

    } )

  }

};
</script>

<style scoped>

</style>