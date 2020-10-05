<template>
  <div class="container">
    <h1 class="app-title">Vue 3 crypto currency app</h1>
    <router-view/>
  </div>
</template>

<script>
import M from 'materialize-css';
import {onBeforeMount} from "vue"

export default {

  setup() {
    onBeforeMount(() =>  M.AutoInit())
  }
}
</script>

<style>
.app-title {
  font-size: 1.6rem;
  text-align: center;
  font-weight: 700;
}

</style>