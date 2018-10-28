<template>
  <div id="app">
    <h1>Auth for Initiative</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/setup/campaigns">Select Campaign</router-link> |
      <router-link to="/setup/participants">Add Participants</router-link> |
      <router-link to="/Initiative">Combat Initiative</router-link>
    </div>
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
export default {
  name: 'App',
  beforeMount () {
    // just in case we've visited before.
    const token = localStorage.getItem('kankaToken')
    if (token) this.$store.commit('setToken', token)
  }
}
</script>
