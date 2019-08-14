<template>
  <li class="nav-item">
    <router-link
      class="nav-link"
      :activeClass="activeClass"
      :replace="replace"
      :append="append"
      :tag="tag"
      :exact="exact"
      :event="event"
      :exactActiveClass="exactActiveClass"
      :to="route"
      >
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'navbar-nav-link',
  props: {
    activeClass: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      required: true
    },
    replace: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: {
      type: Boolean,
      default: false
    },
    event: {
      type: [String, Array],
      default: 'click'
    },
    exactActiveClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
</style>
