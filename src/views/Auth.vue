<template lang="pug">
  //- auth
  .auth-wrapper
    p Before using this app, please authenticate with Kanka.io!
    br
    button.button(@mousedown="kankaOauth")
      span.icon.is-small
        img(src='/img/kanka_logo.png')
      span Authenticate via Kanka.io
    span
      i Coming Soon™
    .is-divider(data-content="OR")
    set-token
</template>

<script>
// @ is an alias to /src
import SetToken from '@/components/SetToken.vue'

export default {
  name: 'AuthPage',
  components: { SetToken },
  data () {
    return {
      baseUrl: 'https://kanka.io/oauth/authorize?',
      clientId: 4,
      clientSecret: '' || process.env.CLIENT_SECRET,
      redirectURI: process.env.REDIRECT_URI || 'http%3A%2F%2Flocalhost%3A8080%2Foauth%2Fcallback',
      responseType: 'code'
    }
  },
  methods: {
    kankaOauth () {
      window.location.replace(`${this.baseUrl}client_id=${this.clientId}&client_secret=${this.clientSecret}&redirect_uri=${this.redirectURI}&response_type=${this.responseType}`)
    }
  }
}
</script>
