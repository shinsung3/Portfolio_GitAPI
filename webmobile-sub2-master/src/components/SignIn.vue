<template>
  <v-dialog v-model="dialogSignIn" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn id="signinval" round color="#F08080" dark v-on="on">
        <i class="fas fa-sign-in-alt fa-lg"></i>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span id="modaltitle" class="DokdoList">
          Log In
          <i class="fas fa-sign-in-alt fa-sm"></i>
        </span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-flex xs12>
            <v-text-field
              label="Email*"
              required
              v-model="email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              label="Password*"
              type="password"
              required
              v-model="password"
            ></v-text-field>
          </v-flex>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-grey" flat @click="signIn">LogIn</v-btn>
        <v-btn color="blue-grey" flat @click="cancleSignIn">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="https://kit.fontawesome.com/0815a79704.js"></script>
<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "SignIn",
  data() {
    return {
      dialogSignIn: false,
      email: "",
      password: ""
    };
  },
  methods: {
    async signIn() {
      this.$store.state.user = FirebaseService.signIn(
        this.email,
        this.password
      );
      this.email = "";
      this.password = "";
      this.dialogSignIn = false;
      this.$router.push("/");
    },
    cancleSignIn() {
      this.email = "";
      this.password = "";
      this.dialogSignIn = false;
    }
  }
};
</script>

<style>
#modaltitle {
  font-size: 250%;
}
#signinval {
  width: 4%;
  font-size: 15px;
}
</style>
