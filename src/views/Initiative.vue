<template lang="html">
  <div>
    <button class="button" @mousedown="prevCombatant">Previous Combatant</button>
    <button class="button is-primary" @mousedown="nextCombatant">Move to next Combatnat</button>
    <ul class="flex" v-sortable="{ onEnd: reorder}">
      <li class="list-group-item" v-for="mob in combatParticipants" :key="mob.id">
          <combatant :mob="mob" :open="false" :selected="currentCombatantId === mob.id" />
      </li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
  }
  .li {
    margin: 1em;
  }
  img {
    overflow: hidden;
  }
</style>


<script>
import Combatant from '@/components/Combatant.vue'

export default {
  name: 'Initiative',
  components: { Combatant },
  data () {
    return {
      currentCombatantId: null,
      currentCombatantIndex: 0
    }
  },
  computed: {
    combatParticipants () {
      return this.$store.state.combatParticipants
    }
  },
  methods: {
    modulo (x, n) {
      return ((x % n) + n) % n
    },
    nextCombatant () {
      this.currentCombatantIndex = this.modulo((this.currentCombatantIndex + 1), this.combatParticipants.length)
      this.currentCombatantId = this.combatParticipants[this.currentCombatantIndex].id
    },
    prevCombatant () {
      this.currentCombatantIndex = this.modulo((this.currentCombatantIndex + 1), this.combatParticipants.length)
      this.currentCombatantId = this.combatParticipants[this.currentCombatantIndex].id
    },
    reorder ({ oldIndex, newIndex }) {
      const listCopy = this.combatParticipants
      const movedItem = listCopy.splice(oldIndex, 1)[0]
      listCopy.splice(newIndex, 0, movedItem)
      this.$store.commit('setAllCombatCharacters', listCopy)
    }
  },
  beforeMount () {
    if (!this.$store.state.campaign) {
      this.$toast.open({
        message: 'Must pick a campaign',
        type: 'is-warning'
      })
      this.$router.push('/setup/campaigns')
    } else if (this.combatParticipants.length === 0) {
      this.$toast.open({
        message: 'Must pick participants',
        type: 'is-warning'
      })
      this.$router.push('/setup/participants')
    }
  },
  mounted () {
    if (this.combatParticipants.length > 0) {
      this.currentCombatantId = this.combatParticipants[0].id
      this.currentCombatantIndex = 0
    }
  }
}
</script>
