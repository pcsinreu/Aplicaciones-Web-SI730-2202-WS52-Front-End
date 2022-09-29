<template>
  <router-link to="/newcomment">new comment</router-link>
  <pv-dataTable :value="comments">

    <pv-column field="id" header="Id"></pv-column>
    <pv-column field="body" header="body"></pv-column>
    <pv-column field="postId" header="Actions">

      <template #body="slotProps">
        <div class="field grid justify-content-center gap-4">
          <pv-button @click="deleteComment(slotProps.data.id)">Eliminar</pv-button>
          <pv-button @click="editComment(slotProps.data.id)">Editar</pv-button>
        </div>
      </template>

    </pv-column>
  </pv-dataTable>
</template>

<script>
import { CommentsServices } from "@/services/coments-services";

export default {
  name: "Comment",
  data() {
    return {
      comments: null,
      commentsServices: new CommentsServices()
    };
  },
  methods: {
    deleteComment: function(id) {
      this.commentsServices.deleteComment(id);
      this.getAllComments();
    },
    editComment: function(id) {
      this.$router.push({ path: "editcomment", params: { id } });
    },
    getAllComments: function() {
      this.commentsServices.getComments().then(response => {
        this.comments = response.data;
      });
    }
  },
  created() {
    this.getAllComments();
  }
};
</script>

<style scoped>

</style>