<template>
  <!-- SEARCH COMPONENT -->
  <b-form-group class="border rounded p-3">

    <!-- TEXT SEARCH  -->
    <card-search-text-input class="mb-3"
                            v-model="searchTerm">
    </card-search-text-input>

    <!-- ADVANCED SEARCH OPTIONS -->
    <div v-if="showAdvanced">
      <!-- SET SELECTOR -->
      <b-form-select class="mb-3"
                      placeholder="Set"
                      v-model="currentSet"
                      :options="setOptions"
                      >
      </b-form-select>

      <!-- TYPE SELECTOR -->
      <b-form-select class="mb-3"
                      placeholder="Type"
                      v-model="selectedType"
                      :options="typeOptions">
      </b-form-select>

      <!-- RARITY SELECTOR -->
      <b-form-select class="mb-3"
                      placeholder="Rarity"
                      v-model="selectedRarity"
                      :options="rarityOptions">

      </b-form-select>

      <!-- COLOR SELECTOR -->
      <b-form-checkbox-group
        class="mb-3"
        id="mana-color-form-2"
        v-model="selectedColors"
        :options="colorOptions"
        name="mana">
      </b-form-checkbox-group>
    </div>
    <b-button-group class="float-right">
      <button class="btn btn-default" @click="toggleAdvanced"><i :class="`fas fa-chevron-${showAdvanced ? 'down' : 'left'}`"></i> {{showAdvanced ? 'Less': 'More'}}</button>
      <button class="btn btn-success" @click="onSearchSubmit">Search</button>
    </b-button-group>
  </b-form-group>
</template>

<script>
import CardSearchTextInput from './CardSearchTextInput.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'card-search',
  components: {
    CardSearchTextInput
  },
  data () {
    return {
      showAdvanced: false,
      searchTerm: '',
      currentSet: null,
      // RARITY SELECTOR
      selectedRarity: null,
      rarityOptions: [{
        text: 'Rarity...',
        value: null,
        disabled: true
      }, {
        text: 'Common',
        value: 'common'
      }, {
        text: 'Uncommon',
        value: 'uncommon'
      }, {
        text: 'Rare',
        value: 'rare'
      }, {
        text: 'Mythic',
        value: 'mythic'
      }],
      // COLORS SELECTOR
      selectedColors: [],
      colorOptions: [{
        text: 'White',
        value: 'w'
      }, {
        text: 'Blue',
        value: 'u'
      }, {
        text: 'Black',
        value: 'b'
      }, {
        text: 'Red',
        value: 'r'
      }, {
        text: 'Green',
        value: 'g'
      }, {
        text: 'Colorless',
        value: 'c'
      }],
      // TYPE SELECTOR
      selectedType: null,
      typeOptions: [{
        text: 'Type...',
        value: null,
        disabled: true
      }, {
        text: 'Creature',
        value: 'creature'
      }, {
        text: 'Instant',
        value: 'instant'
      }, {
        text: 'Sorcery',
        value: 'sorcery'
      }, {
        text: 'Enchantment',
        value: 'enchantment'
      }, {
        text: 'Land',
        value: 'land'
      }
      ]
    }
  },
  computed: {
    ...mapState(['loading', 'sets', 'cards']),
    setOptions () {
      const filtered = this.sets.filter(
        set => set.set_type === 'core' ||
               set.set_type === 'expansion' ||
               set.set_type === 'masters'
      ).map(set => {
        return {
          text: set.name,
          value: set.code
        }
      })
      filtered.unshift({
        text: 'Set...',
        value: null,
        disabled: true
      })
      return filtered
    },
    searchOptions () {
      return {
        text: this.searchTerm,
        set: this.currentSet,
        type: this.selectedType,
        colors: this.selectedColors,
        rarity: this.selectedRarity
      }
    }
  },

  methods: {
    ...mapActions([
      'CARD_SEARCH',
      'GET_CARD_AUTOCOMPLETE'
    ]),
    toggleAdvanced (e) {
      e.preventDefault()
      this.showAdvanced = !this.showAdvanced
    },
    onSearchSubmit (e) {
      e.preventDefault()
      this.CARD_SEARCH(this.searchOptions)
    }
  }
}
</script>
