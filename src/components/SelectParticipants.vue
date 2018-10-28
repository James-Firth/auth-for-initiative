<template lang="pug">
  .columns
    .column
      b-loading(:is-full-page="false" :active.sync="showLoader")
      .is-size-5 Select Participants for Combat
      router-link(to="/initiative")
        button.button Done selecting
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
