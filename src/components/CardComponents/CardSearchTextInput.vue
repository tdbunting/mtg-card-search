<template>
  <type-ahead placeholder="Search..."
              v-model="searchTerm"
              :data="autocompleteTerms"
              :maxMatches="5"
              @input="updateSearchTerm"
              >
  </type-ahead>
</template>

<script>
import TypeAhead from '@/components/TypeAheadComponent/TypeAhead.vue'
import CardsApi from '@/services/api/CardsApi'

export default {
  name: 'card-search-text-input',
  data () {
    return {
      searchTerm: '',
      isHidden: true,
      autocompleteTerms: []
    }
  },
  components: {
    TypeAhead
  },
  computed: {
    showResults () {
      return this.autocompleteTerms.length > 0 && !this.isHidden
    }
  },
  watch: {
    async searchTerm (newTerm) {
      try {
        const cards = await CardsApi.cardAutocomplete(newTerm)
        this.autocompleteTerms = cards.data.data
        this.isHidden = false
      } catch (err) {
        console.log(err)
        this.autocompleteTerms = []
      }
    }
  },
  methods: {
    updateSearchTerm () {
      this.$emit('input', this.searchTerm)
    }
  }
}
</script>

<style lang="scss">
.autocomplete-results {
  padding-top: 5px;
  position: absolute;
  max-height: 350px;
  width: 100%;
  overflow-y: auto;
  z-index: 999;
}
</style>
