<template>
  <v-btn id="faval" round color="#4169E1" dark v-on:click="loginWithFacebook">
    <i class="fab fa-facebook-square fa-lg"></i>
  </v-btn>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  methods: {
    async loginWithFacebook() {
      const result = await FirebaseService.loginWithFacebook();
      this.$store.state.accessToken = result.credential.accessToken;
      this.$store.state.user = result.user;
      this.$router.push("/home");
    }
  }
};
</script>

<style>
#faval {
  width: 4%;
  font-size: 17px;
}
</style>
