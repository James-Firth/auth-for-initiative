<template lang="pug">
  //- auth
  .columns.is-centered
    .column.is-narrow
      .auth-wrapper
        p Before using this app, please authenticate with Kanka.io!
        br
        a.button(:href="oauthUrl")
          span.icon.is-small
            img(src='/img/kanka_logo.png')
          span Authenticate via Kanka.io
        .is-divider(data-content="OR")
        .set-tokens-wrapper
          .field
            label.label Personal Access Token
            .control
              input.input(v-model="kankaToken" type="text")
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
      clientId: {
        dev: process.env.VUE_APP_DEV_CLIENT_ID || 0,
        prod: process.env.VUE_APP_PROD_CLIENT_ID || 0
      },
      clientSecret: {
        dev: process.env.VUE_APP_DEV_CLIENT_SECRET || '',
        prod: process.env.VUE_APP_PROD_CLIENT_SECRET || ''
      },
      redirectURI: process.env.VUE_APP_REDIRECT_URI || 'http%3A%2F%2Flocalhost%3A8080%2Foauth%2Fcallback',
      responseType: 'token'
    }
  },
  computed: {
    kankaToken () { return this.$store.state.auth.accessToken },
    baseUrl () {
      return `https://${this.devServer ? 'dev.' : ''}kanka.io/oauth/authorize?`
    },
    devServer () { return this.$store.state.devServer },
    oauthUrl () {
      let oauthUrl = `${this.baseUrl}client_id=${this.devServer ? this.clientId.dev : this.clientId.prod}`
      oauthUrl = `${oauthUrl}&client_secret=${this.devServer ? this.clientSecret.dev : this.clientSecret.prod}`
      return `${oauthUrl}&redirect_uri=${this.redirectURI}&response_type=${this.responseType}`
    }
  },
  methods: {
    switchServerType () {
      this.$store.commit('useDevServer', !this.$store.state.devServer)
    },
    setToken () {
      this.$store.commit('setToken', this.kankaToken)
      this.$router.push('/setup/campaigns')
    }
  }
}
</script>
