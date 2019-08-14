import Vue from 'vue'
import Vuex from 'vuex'
import CardsApi from '@/services/api/CardsApi'
import SetsApi from '@/services/api/SetsApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    numPages: 1,
    totalCards: 0,
    hasMorePages: false,
    cards: [],
    sets: [],
    autocomplete: []
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_CARDS (state, payload) {
      state.cards = payload.data
    },
    SET_SETS (state, payload) {
      state.sets = payload.data
    },
    SET_NUM_PAGES (state, payload) {
      state.numPages = payload
    },
    SET_HAS_MORE (state, payload) {
      state.hasMorePages = payload
    },
    SET_AUTOCOMPLETE_OPTIONS (state, payload) {
      state.autocomplete = payload.data
    }
  },
  actions: {
    async GET_CARDS (context) {
      context.commit('SET_LOADING', true)
      try {
        const cards = await CardsApi.getCards()

        context.commit('SET_CARDS', cards.data)
        context.commit('SET_LOADING', false)
      } catch (err) {
        console.log(err)
      }
    },
    async GET_SETS (context) {
      context.commit('SET_LOADING', true)
      try {
        const sets = await SetsApi.getSets()
        context.commit('SET_SETS', sets.data)
        context.commit('SET_LOADING', false)
      } catch (err) {
        console.log(err)
      }
    },
    async GET_CARDS_BY_SET (context, setCode) {
      context.commit('SET_LOADING', true)
      try {
        const cards = await CardsApi.getCardsBySetCode(setCode)

        if (cards.data.has_more) {
          context.commit('SET_NUM_PAGES', Math.ceil(cards.data.total_cards / 175))
          context.commit('SET_HAS_MORE', true)
        } else {
          context.commit('SET_HAS_MORE', false)
        }
        context.commit('SET_CARDS', cards.data)
        context.commit('SET_LOADING', false)
      } catch (err) {
        console.log(err)
      }
    },
    async CARD_SEARCH (context, searchOptions) {
      context.commit('SET_LOADING', true)
      try {
        const cards = await CardsApi.cardSearch(searchOptions)
        context.commit('SET_CARDS', cards.data)
        context.commit('SET_LOADING', false)
      } catch (err) {
        context.commit('SET_CARDS', { data: [] })
        console.log(err)
        context.commit('SET_LOADING', false)
      }
    },
    async GET_CARD_AUTOCOMPLETE (context, searchTerm) {
      try {
        const cards = await CardsApi.cardAutocomplete(searchTerm)
        context.commit('SET_AUTOCOMPLETE_OPTIONS', cards.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
})
