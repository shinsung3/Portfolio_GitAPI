<template>
  <div>
    <v-container>
      <center>
        <h1
          class="DokdoList mt-2"
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '15px',
            maxFontSize: '50px',
            delay: 200
          }"
        >
          관리자 페이지<v-icon>fas fa-users-cog</v-icon>
        </h1>
      </center>
      <v-flex>
        <PostsCount></PostsCount>
      </v-flex>
      <v-flex width="100%">
        <UserList></UserList>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import UserList from "../components/Admin/UserList";
import PostsCount from "../components/Admin/PostsCount";

export default {
  name: "Adminpage",
  components: {
    UserList,
    PostsCount
  },
  created() {
    if (this.$store.state.userauth != "관리자") {
      swal ( "Only Administrator" , "관리자만 접근할 수 있습니다." ,  "info" )
      this.$router.push("/home");
    }
  }
};
</script>
