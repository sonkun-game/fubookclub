<template>
  <div>
    <HeaderHome></HeaderHome>
    <nuxt></nuxt>
  </div>
</template>

<script>
import Header from '~/components/Header/Header.vue'
import HeaderHome from '~/components/Header/HeaderHome.vue'
export default {
  components: {
    Header,
    HeaderHome
  }
}
</script>
