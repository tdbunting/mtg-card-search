import axios from 'axios'

export default {
  async getSets () {
    return axios.get('/sets')
  },

  async getSetsByCode (code) {
    return axios.get(`/cards?q=e:${code}`)
  }
}
