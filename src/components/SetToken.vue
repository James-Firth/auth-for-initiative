<template lang="pug">
  .set-tokens-wrapper
    .field
      label.label Personal Access Token
      .control
        input.input(v-model="kanka_token" type="text")
      .control
        button.button.is-primary(@click="setToken") Set Token
</template>

<style lang="scss" scoped>
  @import '../../node_modules/bulma-divider/dist/css/bulma-divider.min.css';

  .set-tokens-wrapper {
    padding: 1em;
  }
</style>

<script>
export default {
  name: 'SetToken',
  data () {
    return {
      kanka_token: ''
    }
  },
  methods: {
    setToken () {
      this.$store.commit('setToken', this.kanka_token);
      this.$router.push('/setup/campaigns')
    }
  }
}
</script>
