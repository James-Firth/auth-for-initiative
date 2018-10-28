<template lang="pug">
  //- auth
  .auth-wrapper
    a.button(disabled :href="`${baseUrl}client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectURI}&response_type=${responseType}`")
      span.icon.is-small
        img(src='/img/kanka_logo.png')
      span Authenticate via Kanka.io
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
      baseUrl: 'https://dev.kanka.io/oauth/authorize?',
      clientId: 4,
      clientSecret: '' || process.env.CLIENT_SECRET,
      redirectURI: process.env.REDIRECT_URI || 'http%3A%2F%2Flocalhost%3A8080%2Foauth%2Fcallback',
      responseType: 'code'
    }
  }
}
</script>
