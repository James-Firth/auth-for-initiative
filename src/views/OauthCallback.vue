<template lang="pug">
  p {{ message }}
</template>

<script>
export default {
  name: 'OauthCallback',
  data () {
    return {
      message: 'Processing OAuth Token...'
    }
  },
  async mounted () {
    const pairs = window.location.search.slice(1).split('&')
    let vars = {}

    // Grab all the GET variables
    pairs.map(currentPair => {
      let [key, value] = currentPair.split('=')
      vars[key] = value
    })

    if (vars['code']) {
      // TODO Add this to kankajs
      // https://laravel.com/docs/5.7/passport#implicit-grant-tokens
      //       'grant_type' => 'authorization_code',
      // 'client_id' => 'client-id',
      // 'client_secret' => 'client-secret',
      // 'redirect_uri' => 'http://example.com/callback',
      // 'code' => $request->code,
      let token = fetch('https://dev.kanka.io/oauth/token?grant_type=')
      // this.$router.push('/setup/campaigns')
    } else {
      this.data.message = 'ERROR!'
    }
  }
}
</script>
