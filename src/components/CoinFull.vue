<template>
  <div class="row">
    <div class="col s12 center-align">
      <img :src="coin.iconUrl" class="coin__image"/>

      <p class="coin__name center-align" :style="`color: ${coin.color}`">{{ coin.name }}</p>
      <p>{{ coinPrice }}</p>

    </div>
    <div class="col s6">
      <p>Circulating supply: {{ coin.circulatingSupply }}</p>
    </div>
    <div class="col s6">
      <ChangePreview :coinChange="coin.change" large align="center"/>
    </div>

    <div v-html="coin.description">

    </div>
  </div>
</template>

<script>
import ChangePreview from "@/components/ChangePreview"
import {computed} from "vue"
import {roundUpNumber} from "@/assets/helpers"

export default {
  components: {
    ChangePreview
  },
  props: {
    coin: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const coinPrice = computed(() => roundUpNumber(props.coin.price))

    return {
      coinPrice
    }
  }
}
</script>

<style>
.coin {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}

.coin__image {
  width: 92px;
  height: auto;
}

.coin__name {
  font-size: 1.5rem;
}
</style>