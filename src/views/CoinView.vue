<template>
  <div>
    <CoinFull :coin="coinData"/>
  </div>
</template>

<script>
import {computed, onMounted} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import CoinFull from "@/components/CoinFull";
import {GET_COIN} from "@/store/actions.types"

export default {
  name: "CoinView",
  components: {
    CoinFull
  },
  setup() {
    const store = useStore();
    const router = useRouter()
    console.log(router.currentRoute.value.params.coinID)
    const coinID = computed(() => router.currentRoute.value.params.coinID)

    const coinData = computed(() => store.state.coin)
    onMounted(() => {
      store.dispatch(GET_COIN, coinID.value);
    })

    return {
      coinData
    }
  }
}
</script>

<style scoped>

</style>