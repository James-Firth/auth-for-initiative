<template lang="pug">
  .wrapper
    h1 Participants
    b-loading(:is-full-page="false" :active.sync="showLoader")
    router-link(to="/initiative")
      button.button Done
    b-table(
      :data="availableParticipants"
      :columns="columns"
      @update:checkedRows="updateSelectedParticipants"
      checkable
    )

</template>

<script>
export default {
  name: 'selectParticipants',
  data () {
    return {
      availableParticipants: [],
      columns: [
        {
          field: 'name',
          label: 'Name'
        }
      ],
      showLoader: true
    }
  },
  beforeMount () {
    if (!this.$store.state.campaign) {
      this.$toast.open({
        message: 'Must pick a campaign',
        type: 'is-warning'
      })
      this.$router.push('/setup/campaigns')
    }
  },
  async mounted () {
    console.log('Fetching Characters')
    const characters = await this.$store.state.campaign.characters.get()
    this.showLoader = false
    this.availableParticipants = characters.data
  },
  methods: {
    updateSelectedParticipants (payload) {
      this.$store.commit('setAllCombatCharacters', payload)
    }
  }

}
</script>
