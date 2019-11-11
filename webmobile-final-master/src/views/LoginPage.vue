<template>
  <v-layout align-center justify-center row>
    <v-flex xs12 text-xs-center>
      <v-layout my-5 align-center
              justify-center row
              fill-height
              style="min-height:500px;">
        <v-flex text-xs-center>
          <div id="loginwith"
              class="container xs3"
              align-center>
            <h1>Log In with</h1>
            <br>
            <SignInGoogle></SignInGoogle>
            <SignInFacebook></SignInFacebook>
            <SignIn></SignIn>

          </div>
          <div id="signup"
              class="container"
              align-end>
            <span>Sign Up </span>
            <SignUp></SignUp>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script
  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
  integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
  crossorigin="anonymous"
></script>
<script
  src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
  crossorigin="anonymous"
></script>
<script>
import FirebaseService from "@/services/FirebaseService";
import SignIn from "../components/Sign/SignIn.vue";
import SignUp from "../components/Sign/SignUp.vue";
import SignInGoogle from "../components/Sign/SignInGoogle.vue";
import SignInFacebook from "../components/Sign/SignInFacebook.vue";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    SignUp,
    SignIn,
    SignInGoogle,
    SignInFacebook
  }
};
</script>

<style>
#loginwith {
  background-color: #add8e6;
  border-radius: 5px;
  max-width: 40vw;
  font-family: "East Sea Dokdo", cursive;
}

#signup {
  float: right;
  font-size: 30px;
  font-family: "East Sea Dokdo", cursive;
}
</style>
