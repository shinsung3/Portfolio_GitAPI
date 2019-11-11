<template>
  <v-btn id="googleval" round color="#FFFAFA" dark v-on:click="loginWithGoogle">
    <i class="fab fa-google fa-lg"></i>
  </v-btn>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  methods: {
    async loginWithGoogle() {
      const result = await FirebaseService.loginWithGoogle();
      this.$store.state.accessToken = result.credential.accessToken;
      this.$store.state.user = result.user;
      this.$router.push("/");
    }
  }
};
</script>

<style>
#googleval {
  width: 4%;
  color: #dc143c;
  font-color: red;
  font-size: 17px;
}
</style>
