<template>
  <router-link to="/comment">new comment</router-link>
  <pv-dataTable :value="comments">

    <pv-column field="id" header="Id"></pv-column>
    <pv-column field="body" header="body"></pv-column>
    <pv-column field="postId" header="Actions">

      <template #body="slotProps">
        <div class="field grid justify-content-center gap-4 justify-content-center">
          <pv-button @click="deleteComment(slotProps.data.id)">Eliminar</pv-button>
          <pv-button @click="editComment(slotProps.data.id)">Editar</pv-button>
        </div>
      </template>
    </pv-column>
  </pv-dataTable>
</template>

<script>
import { CommentsServices } from "@/services/coments-api.service";

export default {
  name: "Comments",
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
      this.$router.push({ path: `/comment/${id}` });
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