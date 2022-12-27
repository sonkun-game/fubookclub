<template>
  <div>
    <Header></Header>
    <nuxt></nuxt>
  </div>
</template>

<script>
import Header from '~/components/Header/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
