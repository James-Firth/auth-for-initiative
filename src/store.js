import Vue from 'vue'
import Vuex from 'vuex'
import kanka from 'kanka'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    devServer: false,
    kanka_token: '',
    campaign: null,
    all_campaigns: [],
    all_characters: [],
    combatParticipants: []
  },
  mutations: {
    useDevServer (state, useDev) {
      state.devServer = useDev
      window.localStorage.setItem('devServer', useDev)
      if (useDev) {
        kanka.useDevServer()
      } else {
        kanka.setDomains({})
      }
    },
    setToken (state, token) {
      state.kanka_token = token
      kanka.setToken(token)
      window.localStorage.setItem('kankaToken', token)
    },
    setCampaigns (state, campaigns) {
      state.all_campaigns = campaigns
    },
    setSelectedCampaign (state, campaign) {
      state.campaign = campaign
    },
    setAllCombatCharacters (state, characterList) {
      state.combatParticipants = characterList
    }
  },
  actions: {
    async getCampaigns ({ state, commit }) {
      console.log('get campaigns')
      const results = await kanka.listCampaigns()

      if (results && results.data) {
        commit('setCampaigns', results.data)
      }
    }
  }
})
