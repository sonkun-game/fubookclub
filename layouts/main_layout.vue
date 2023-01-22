<template>
  <div>
    <HeaderHome></HeaderHome>
    <Background></Background>
    <div class="w-100"></div>
    <nuxt></nuxt>
  </div>
</template>

<script>
import Header from '~/components/Header/Header.vue'
import HeaderHome from '~/components/Header/HeaderHome.vue'
import Background from '~/components/Body/Background.vue';
export default {
  components: {
    Header,
    HeaderHome,
    Background
  }
}
</script>
