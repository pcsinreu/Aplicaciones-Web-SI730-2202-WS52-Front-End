<template>

  <form class="flex flex-column justify-content-center p-8 gap-4 m-4">
    <div class="field flex flex-column  justify-content-center">
      <label for="email">Email</label>
      <pv-inputText id="email" v-model="email" />
    </div>

    <div class="field flex flex-column  justify-content-center">
      <label for="password" class="col-2">Password</label>
      <pv-inputText id="password" v-model="password" />
    </div>

    <div class="field grid justify-content-center gap-4">
      <pv-button @click="register"> Registrar
      </pv-button>
      <pv-button @click="login"> Login
      </pv-button>
      <pv-button @click="logout"> Logout
      </pv-button>
    </div>
  </form>

</template>

<script>
import { usersServices } from "@/services/user-api.service";


export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      new usersServices().register(this.email, this.password).then(response => console.log("usuario creado"));
    },
    login() {
      new usersServices().login(this.email, this.password).then(response =>
        sessionStorage.setItem("jwt", response.data.accessToken)
      );
    },
    logout() {
      sessionStorage.removeItem("jwt");
    }
  }


};
</script>

<style scoped>

</style>