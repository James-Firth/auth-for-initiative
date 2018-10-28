<template lang="pug">
  b-collapse.card(:class="{ current: selected}" :open="open")
    .card-header(slot='trigger', slot-scope='props')
      .card-header-title
        figure.image.is-48x48
          img(:src='mob.image', alt='Image', v-if='mob.image')
        p
          | {{mob.name}}
      a.card-header-icon
        b-icon(:icon="props.open ? 'chevron-down' : 'chevron-up'")
    .card-content
      .content
        p Character info goes here in the future.
    footer.card-footer
      a.card-footer-item Killed/Out
      a.card-footer-item Must roll Save on Turn

</template>

<style lang="scss" scoped>
  .current {
    .card-header {
      background-color: lime;
    }
  }
</style>

<script>
export default {
  name: 'Combatant',
  props: {
    mob: {
      type: Object
    },
    open: {
      type: Boolean
    },
    selected: {
      type: Boolean
    }
  }
}
</script>
