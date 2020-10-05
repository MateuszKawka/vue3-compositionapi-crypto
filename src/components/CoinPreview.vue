<template>
  <tr @click="goToCoin(coin.id)">
    <td class="col s4 left-align coin-symbol">{{ coin.symbol }}</td>
    <td class="col s4 right-align coin-price">{{ coinPrice }}</td>
    <td class="col s4 left-align hide-on-small-only">{{ coin.marketCap }} $</td>
    <td>
      <ChangePreview :coinChange="coin.change"/>
    </td>
  </tr>
</template>

<script>
import {computed} from "vue"
import ChangePreview from "@/components/ChangePreview";
import {roundUpNumber} from "@/assets/helpers";
import {useRouter} from "vue-router"

export default {
  name: "CoinPreview",
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
    const router = useRouter();


    const goToCoin = (coinID) => {
      router.push({name: 'coin', params: {coinID: coinID}})
    }

    return {
      coinPrice: computed(() => roundUpNumber(props.coin.price)),
      goToCoin
    }

  }
}
</script>

<style scoped>
.coin-symbol {
  font-weight: 700;
}
.coin-price {
  font-weight: 700;
}
</style>