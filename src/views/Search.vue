<template>
  <div class="home container mt-3">
    <!-- CARD SEARCH COMPONENT -->
    <card-search></card-search>

    <div class="container border rounded">
      <div v-if="loading" class="p-5 d-flex justify-content-center">
        <div class="spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else-if="cards.length < 1">
        <h2 class="text-secondary text-center p-5">No cards found.</h2>
      </div>
      <div class="card border-0" v-else>
        <card-list :cards="cards" type="list"></card-list>
      </div>
      <nav v-if="hasMorePages" aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import CardList from '@/components/CardComponents/CardList'
import CardSearch from '@/components/CardComponents/CardSearch'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    CardList,
    CardSearch
  },
  computed: {
    ...mapState(['loading', 'autocomplete', 'sets', 'cards', 'hasMorePages', 'totalCards', 'numPages'])
  }
}
</script>

<style lang="scss">
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
</style>
