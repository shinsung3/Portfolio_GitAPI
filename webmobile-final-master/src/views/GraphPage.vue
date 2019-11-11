<template>
  <div>
    <v-container>
      <Commit />
      <v-flex class="hidden-sm-and-down">
        <Draw />
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import Commit from "../components/Repository/Commit.vue";
import Draw from "../components/Repository/GraphDraw.vue";

export default {
  name: "RepositoryPage",
  components: {
    Commit,
    Draw
  }
};
</script>
