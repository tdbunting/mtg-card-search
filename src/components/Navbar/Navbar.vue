<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">MTG Search</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <navbar-nav-link route="/search">Search</navbar-nav-link>
        </ul>
      </div>
    </nav>
</template>

<script>
import NavbarNavLink from './NavbarNavLink'

export default {
  name: 'navbar-component',
  components: {
    NavbarNavLink
  }
}
</script>

<style lang='scss'>

</style>
