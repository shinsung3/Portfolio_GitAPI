<template>
  <v-card>
    <v-img :src="imgSrc" height="200px">
    </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline text2">{{title}}</div>
        <span class="grey--text text1">{{body}}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import '../CSS/ellipsis.css'

export default {
  name: 'Portfolio',
  props: {
    date: {
      type: String
    },
    title: {
      type: String
    },
    body: {
      type: String
    },
    imgSrc: {
      type: String
    },
  },
  data() {
    return {
      //
    }
  }
}
</script>
