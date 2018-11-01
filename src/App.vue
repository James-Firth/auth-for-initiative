<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/../../node_modules/bulma/bulma.sass';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  beforeMount () {
    // just in case we've visited before.
    const token = localStorage.getItem('kankaToken')
    const devServer = (localStorage.getItem('devServer') === 'true')
    if (token) this.$store.commit('setToken', token)
    this.$store.commit('useDevServer', devServer)
  }
}
</script>
