import axios from 'axios'

export default {
  async getCards () {
    return axios.get('/cards')
  },
  async getCardsBySetCode (code) {
    return axios.get(`/cards/search?q=e:${code}`)
  },
  async cardAutocomplete (searchTerm) {
    return axios.get(`/cards/autocomplete?q=${searchTerm}`)
  },
  async cardSearch (searchOptions) {
    const { text, set, colors, type, rarity } = searchOptions

    let searchUrl = `/cards/search`
    let searchQueries = []

    if (text) {
      return axios.get(`${searchUrl}?q=name:${text}`)
    }

    if (set) {
      searchQueries.push(`set:${set}`)
    }
    if (colors.length > 0) {
      searchQueries.push(`color:${colors.reduce((acc, cur) => acc + cur)}`)
    }
    if (type) {
      searchQueries.push(`type:${type}`)
    }
    if (rarity) {
      searchQueries.push(`rarity:${rarity}`)
    }
    let queryStr = searchQueries.length > 0 ? searchQueries.reduce((acc, cur) => acc + `+${cur}`) : ''
    let searchStr = queryStr !== '' ? `${searchUrl}?q=${queryStr}` : searchUrl
    return axios.get(searchStr)
  }
}
