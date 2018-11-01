<template lang="pug">
  //- auth
  .columns.is-centered
    .column.is-narrow
      .auth-wrapper
        p Before using this app, please authenticate with Kanka.io!
        br
        button.button(disabled @mousedown="kankaOauth")
          span.icon.is-small
            img(src='/img/kanka_logo.png')
          span Authenticate via Kanka.io
        span
          i Coming Soon™
        .is-divider(data-content="OR")
        .set-tokens-wrapper
          .field
            label.label Personal Access Token
            .control
              input.input(v-model="kanka_token" type="text")
            .control
              button.button.is-primary(@click="setToken") Set Token
        br
        br
        b-switch(v-model="devServer" @input="switchServerType") {{ devServer ? 'Using Dev Server' : 'Using Prod Server' }}
</template>

<style lang="scss" scoped>
  @import '../../node_modules/bulma-switch/dist/css/bulma-switch.min.css';
  .set-tokens-wrapper {
    padding: 1em;
  }
</style>

<script>
// @ is an alias to /src
export default {
  name: 'AuthPage',
  data () {
    return {
      rememberMe: false,
      // devServer: this.$store.state.devServer,
      baseUrl: 'https://kanka.io/oauth/authorize?',
      clientId: process.env.CLIENT_ID || 0,
      clientSecret: process.env.CLIENT_SECRET || '',
      kanka_token: this.$store.state.kanka_token,
      redirectURI: process.env.REDIRECT_URI || 'http%3A%2F%2Flocalhost%3A8080%2Foauth%2Fcallback',
      responseType: 'token'
    }
  },
  computed: {
    devServer () { return this.$store.state.devServer }
  },
  methods: {
    switchServerType () {
      this.$store.commit('useDevServer', !this.$store.state.devServer)
    },
    kankaOauth () {
      window.location.replace(`${this.baseUrl}client_id=${this.clientId}&client_secret=${this.clientSecret}&redirect_uri=${this.redirectURI}&response_type=${this.responseType}`)
    },
    setToken () {
      this.$store.commit('setToken', this.kanka_token)
      this.$router.push('/setup/campaigns')
    }
  }
}
</script>
