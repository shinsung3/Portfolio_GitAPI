<template>
  <v-dialog v-model="dialogSignUp" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn id="signupval" round color="#ADD8E6" dark v-on="on">
        <v-icon size="25">fa-user-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title align-center>
        <span id="modaltitle" class="DokdoList">
          Sign Up
          <v-icon size="25" color="black">fa-user-plus</v-icon>
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
          <v-flex xs12>
            <v-text-field
              label="UserName*"
              required
              v-model="username"
            ></v-text-field>
          </v-flex>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-grey" flat @click="signUp">SignUp</v-btn>
        <v-btn color="blue-grey" flat @click="cancleSignUp">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import "../../CSS/DokdoFont.css";

export default {
  name: "SignUp",
  data() {
    return {
      dialogSignUp: false,
      email: "",
      password: "",
      username: ""
    };
  },
  methods: {
    async signUp() {
      FirebaseService.signUp(this.email, this.password, this.username);
      this.email = "";
      this.password = "";
      this.dialogSignUp = false;
      this.$router.push("/home");
    },
    cancleSignUp() {
      this.email = "";
      this.password = "";
      this.dialogSignUp = false;
    }
  }
};
</script>

<style>
#modaltitle {
  font-size: 250%;
}
#signupval {
  width: 4%;
  color: #2a7189;
}
</style>
