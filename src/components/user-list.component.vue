<template>

  <div v-for="user in users" :key="user.id" class="grid justify-content-center p-4">
    <pv-card>
      <template #header>
        <pv-image alt="user header" :src="'https://picsum.photos/200' + user.id" imageClass="product-image"
                  imageStyle="width:250px">
          <template #indicator>
            Preview Content
          </template>
        </pv-image>
      </template>
      <template #title>
        User {{ user.id }}
      </template>
      <template #content>
        {{ user.email }}
      </template>

      <template #footer>
        <pv-button icon="pi pi-check" label="Delete" @click="deleteUser(user.id)" >Delete</pv-button>
      </template>
    </pv-card>
  </div>
  <Toast />
  <Toast position="top-left" group="tl" />
  <Toast position="bottom-left" group="bl" />
  <Toast position="bottom-right" group="br" />
</template>

<script>

import { usersServices } from "@/services/user-api.service";

export default {
  name: "user-list.component.vue",
  data() {
    return {
      users: null,
      usersServices: new usersServices()
    };
  },
  methods: {
    deleteUser: function(id) {
      console.log("delete user" + id);
    }
  },
  mounted() {
  },
  created() {
    this.usersServices.getUsers().then(response => this.users = response.data);
  }
};
</script>

<style>

.product-image {
  height: 250px;
}

</style>