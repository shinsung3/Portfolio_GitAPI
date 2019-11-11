<script src="https://unpkg.com/marked@0.3.6"></script>
<script src="https://unpkg.com/lodash@4.16.0"></script>

<template>
  <v-app>
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
        input: '# hello'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
})
</script>
