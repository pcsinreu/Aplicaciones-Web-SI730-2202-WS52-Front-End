<template>
  <router-link to="/newcomment">new comment</router-link>
  <pv-dataTable :value="comments">

      <pv-column field="id" header="Id"></pv-column>
      <pv-column field="body" header="body"></pv-column>
       <pv-column field="postId" header="Post Id">

         <template #body="slotProps">
           <pv-button @click="deleteComment(slotProps.data.id)"   >Eliminar </pv-button>
         </template>

       </pv-column>
  </pv-dataTable>
</template>

<script>
import { CommentsServices } from "@/services/coments-services";

export default {
  name: "Comment",
  data(){
    return {
      comments: null
    }
  },
  methods:{
    deleteComment: function(id){
      console.log("eliminando comment " + id)
    }
  },
  created() {
    new CommentsServices().getComments().then(response =>  {
        this.comments = response.data
        localStorage.setItem("comments","comentario") //Insertar - modificar
        localStorage.setItem("comments2","comentario2") //Insertar - modificar
        sessionStorage.setItem("comments3","comentario3") //Insertar - modificar3
      sessionStorage.removeItem("comments2")
    })
  }
};
</script>

<style scoped>

</style>