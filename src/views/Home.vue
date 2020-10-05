<template>
  <div>
    <SavedCoins/>
    <LoadingSpinner v-if="isLoading"/>
    <table class="highlight">
      <thead>
      <tr>
        <th class="left-align">Name</th>
        <th class="right-align">Price</th>
        <th class="left-align hide-on-small-only">Market cap</th>
        <th class="right-align"><TimePeriodDropdown /></th>
      </tr>
      </thead>
      <tbody>
      <CoinPreview v-for="coin in coins" :key="coin.id" :coin="coin"/>
      </tbody>
    </table>

  </div>
</template>

<script>
import CoinPreview from "@/components/CoinPreview";
import SavedCoins from "@/components/SavedCoins"
import {computed, onMounted} from "vue"
import {useStore} from "vuex";
import {GET_COINS} from "@/store/actions.types.js"
import TimePeriodDropdown from "@/components/TimePeriodDropdown";
import LoadingSpinner from "@/components/LoadingSpinner"
export default {
  components: {
    CoinPreview,
    SavedCoins,
    TimePeriodDropdown,
    LoadingSpinner
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch(GET_COINS);
    })
    return {
      coins: computed(() => store.state.coins),
      isLoading: computed(() => store.state.isLoading)
    }
  }
}
</script>