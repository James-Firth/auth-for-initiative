<template lang="pug">
  nav.navbar(role='navigation', aria-label='main navigation')
    .navbar-brand
      a.navbar-item(href='/')
        //- img(src='@/assets/logo.jpg', width='150', height='150') //TODO: Make a half decent logo
        span.is-size-4 Auth for Initiative
      a.navbar-burger.burger(:class="{ 'is-active': burgerOpen }" role='button', aria-label='menu', aria-expanded='false', data-target='navbarBasicExample' @mousedown="burgerOpen = !burgerOpen")
        span(aria-hidden='true')
        span(aria-hidden='true')
        span(aria-hidden='true')
    #navbarBasicExample.navbar-menu(:class="{ 'is-active': burgerOpen }")
      .navbar-start
        router-link.navbar-item(to='/' exact) Authenticate
        router-link.navbar-item(to='/setup/campaigns') Select Campaign
        router-link.navbar-item(to='/setup/participants') Add Participants
        router-link.navbar-item(to='/Initiative') Combat Initiative

</template>

<style lang="scss" scoped>

  .router-link-active {
    color: hsl(271, 100%, 71%);
    font-weight: bold;
  }
</style>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      burgerOpen: false
    }
  }
}
</script>
