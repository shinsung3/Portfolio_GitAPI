<template>
  <v-layout py-4 h-100>
    <v-flex row>
      <div class="caption">{{formatedDate}}</div>
      <TransComponent class="row"
      :title="title"
      :body="body"
      >
      </TransComponent>
    </v-flex>
  </v-layout>
</template>

<script>
import '../CSS/ellipsis.css'
import TransComponent from './Translate.vue'

export default {
  components:{
    TransComponent
  },
  name: 'Post',
  props: {
    date: {
      type: Date
    },
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  computed: {
    formatedDate() {
      return `${this.date.getFullYear()}년 ${this.date.getMonth()}월 ${this.date.getDate()}일`
    }
  }
}
</script>

<style>
.color-666 {
  color: #666;
}

.color-333 {
  color: #333;
}

.h-100 {
  height: 100%;
}
</style>
