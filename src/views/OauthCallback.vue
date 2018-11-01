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
  mounted () {
    const pairs = this.$route.hash.slice(1).split('&')
    let vars = {}

    // Grab all the GET variables
    pairs.map(currentPair => {
      let [key, value] = currentPair.split('=')
      vars[key] = value
    })

    this.$store.commit('updateAuth', vars)
    this.$router.push('/setup/campaigns')
  }
}
</script>
