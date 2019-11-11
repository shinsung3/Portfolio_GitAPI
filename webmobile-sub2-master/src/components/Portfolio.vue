<template>
  <v-card>
    <v-img :src="imgSrc" height="200px">
    </v-img>
    <v-card-title primary-title>
      <!-- 번역기능 컴포넌트로 분리 -->
      <TransComponent
      :title="title"
      :body="body"
      >
      </TransComponent>
    </v-card-title>
  </v-card>
</template>

<script src="https://kit.fontawesome.com/0815a79704.js"></script>
<script>
import '../CSS/ellipsis.css'
// 번역 컴포넌트 import
import TransComponent from './Translate.vue'

export default {
  components:{
    TransComponent
  },
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
    }
  },
  methods: {
  },
}
</script>
