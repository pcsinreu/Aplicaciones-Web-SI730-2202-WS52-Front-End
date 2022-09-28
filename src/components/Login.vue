<template>

  <div class="field">
      <label for="email">Email</label>
      <InputText id="email" v-model="email">
      </InputText>
  </div>

  <div class="field">
      <label for="password">password</label>
      <InputText id="password" v-model="password"></InputText>
  </div>

    <pv-button @click="register"  > Registrar
    </pv-button>

    <pv-button @click="login"  > Login
    </pv-button>

</template>

<script>
import { usersServices } from "@/services/user-services";


export default {
  name: "Login",
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    register(){
      new usersServices().register(this.email,this.password).then(response => console.log("usuario creado"));
    },
    login(){
      new usersServices().login(this.email,this.password).then(response =>
        sessionStorage.setItem("jwt",response.data.accessToken)
      );
    }
  }



};
</script>

<style scoped>

</style>