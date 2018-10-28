<template lang="pug">
  .columns
    .column
      b-loading(:is-full-page="false" :active.sync="showLoader")
      campaign(v-for='camp in campaignList'
        :key="camp.id" :name="camp.name" :description="camp.entry"
        :createdAt="camp.created_at.date" :imgSource="camp.image"
        :campaignId="camp.id"
        @selected="campaignSelected")
</template>

<style lang="scss" scoped>
  .column {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .box {
    margin: 1em;
  }
</style>

<script>
import Campaign from './Campaign.vue'

export default {
  name: 'SelectCampaign',
  components: { Campaign },
  data () {
    return {
      showLoader: true
    }
  },
  computed: {
    campaignList () { return this.$store.state.all_campaigns }
  },
  beforeMount () {
    if (!this.$store.state.kanka_token) {
      this.$toast.open({
        message: 'Must be authenticated first!',
        type: 'is-warning'
      })
      this.$router.push('/')
    }
  },
  mounted () {
    this.$store.dispatch('getCampaigns')
      .then(() => { this.showLoader = false })
  },
  methods: {
    campaignSelected (selectedId) {
      let keepGoing = true
      for (let i = 0; i < this.campaignList.length && keepGoing; i++) {
        if (this.campaignList[i].id === selectedId) {
          keepGoing = false
          this.$store.commit('setSelectedCampaign', this.campaignList[i])
          this.$router.push('/setup/participants')
        }
      }
    }
  }
}
</script>
