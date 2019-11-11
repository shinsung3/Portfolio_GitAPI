<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="users" :search="search">
      <template v-slot:items="props">
        <template v-if="props.item.email !== adminEmail">
          <td>{{ props.item.email }}</td>
          <td>
            <span>&nbsp {{ props.item.auth }} </span>
          </td>
          <td>
            <v-menu>
              <v-chip slot="activator" color="green" dark mx-2>
                <span>
                  {{ props.item.auth }}
                  <i class="fas fa-caret-down"></i>
                </span>
              </v-chip>
              <v-list>
                <v-list-tile
                  v-for="(authority, j) in authorities"
                  @click="modifyAuthorization(props.item.email, authority)"
                  :key="j"
                >
                  <v-list-tile-title>{{ authority }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </td>
        </template>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "UserList",
  data() {
    return {
      adminEmail: "",
      users: [],
      authorities: ["방문자", "팀원", "관리자"],
      search: "",
      headers: [
        { text: "User ID", value: "email" },
        { text: "Authority", value: "auth" },
        { text: "Change Auth", value: "auth" }
      ]
    };
  },
  mounted() {
    this.getUserList();
    this.adminEmail = this.$store.state.user.email;
  },
  methods: {
    async getUserList() {
      this.users = await FirebaseService.getAuthorization();
    },
    async modifyAuthorization(email, auth) {
      FirebaseService.modifyAuthorization(email, auth);
      this.users = await FirebaseService.getAuthorization();
    }
  }
};
</script>

<style media="screen">
v-simple-table {
  width: 100%;
  height: 300px;
  table-layout: fixed;
  border-collapse: collapse;
}

th,
td {
  border-bottom: 1px dotted;
  padding: 5px;
}
</style>
