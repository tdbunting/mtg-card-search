<template>
  <div>
    <div class="row p-3">
      <h4>{{type.charAt(0).toUpperCase() + this.type.slice(1)}} View</h4>
      <b-button-group size="sm" class="ml-auto">
        <b-button variant="light" :active="type === 'list'" @click="toggleType('list')">
          <i class="fas fa-list"></i>
        </b-button>
        <b-button variant="light" :active="type === 'grid'" @click="toggleType('grid')">
          <i class="fas fa-th"></i>
        </b-button>
      </b-button-group>
    </div>
    <div v-if="type === 'grid'">
      <div class="row">
        <div v-for="card in cards" :key="card.id" class="card p-3 border-0 col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <img class="card-img" v-if="card.image_uris" :src="card.image_uris.normal" :alt="card.name">
          <img class="card-img" v-else-if="card.card_faces" :src="card.card_faces[0].image_uris.normal" :alt="card.name">
          <div class="card-img-overlay">
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <b-table responsive striped hover :items="cards" :fields="fields" primary-key="id">
        <!-- CROPPED IMG -->
        <template slot=[image_uris] slot-scope="data">
          <img :src="data.item.image_uris.art_crop" alt="" width="150">
        </template>
        <!-- COLORS -->
        <template slot=[colors] slot-scope="data">
          <i v-for="c in data.item.colors" :key="c" :class="`ms ms-${c.toLowerCase()}`"></i>
        </template>
        <!-- MANA COST -->
        <template slot="[mana_cost]" slot-scope="data">
          <i v-for="(val, i) in convertToIcons(data.value)" :key="i" :class="`ms ms-${val.toLowerCase()}`"></i>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-list',
  props: {
    cards: Array
  },
  data () {
    return {
      type: 'list',
      fields: [
        {
          key: 'image_uris',
          label: 'Image'
        },
        'name',
        'mana_cost',
        {
          key: 'type_line',
          label: 'Type'
        },
        {
          key: 'oracle_text',
          label: 'Description'
        },
        'set_name',
        'rarity',
        'colors'
      ]
    }
  },
  methods: {
    toggleType (type) {
      this.type = type
    },
    convertToIcons (cost) {
      return cost.match(/[^{}]+(?=})/g)
    }
  }
}
</script>

<style lang="scss">
.ms {
  padding: 1px;
  margin: 3px;
  border-radius: 50%;
  background-color: #ccc2c0;
}
.ms-w {
  background-color: #fffbd5,
}
.ms-u {
  background-color: #aae0fa,
}
.ms-b {
  background-color: #cbc2bf,
}
.ms-r {
  background-color: #f9aa8f,
}
.ms-g {
  background-color: #9bd3ae,
}
.ms-c {
  background-color: #ccc2c0,
}
</style>
