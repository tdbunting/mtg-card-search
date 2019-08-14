<template>
  <div id="app">
    <navbar-component></navbar-component>
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar/Navbar'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    NavbarComponent
  },
  computed: {
    ...mapState(['sets'])
  },
  methods: {
    ...mapActions({
      getSets: 'GET_SETS'
    })
  },
  created () {
    this.getSets()
  }
}
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
