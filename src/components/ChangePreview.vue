<template>
  <p class="red-text valign-wrapper change-preview" :class="{'green-text text-accent-4': isPriceIncreased, 'change-preview--large': large}">{{ coinChange }}%
    <span class="material-icons">{{ arrowIcon }}</span>
  </p>
</template>

<script>
import {computed} from "vue"

export default {
  name: "ChangePreview",
  props: {
    coinChange: {
      type: Number,
      required: true
    },
    large: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "left"
    }
  },
  setup(props) {
    const isPriceIncreased = computed(() => props.coinChange > 0)
    const arrowIcon = computed(() => (isPriceIncreased.value ? 'arrow_drop_up' : 'arrow_drop_down'))
    return {
      isPriceIncreased,
      arrowIcon
    }
  }
}
</script>

<style scoped>
.change-preview {
  justify-content: flex-end;
  font-weight: 700;
}

.change-preview--large {
  font-size: 1.4rem;
}
</style>