<template>
    <div>
      <HeaderHomeV2></HeaderHomeV2>
      <div class="w-100"></div>
      <nuxt></nuxt>
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header/Header.vue'
  import HeaderHome from '~/components/Header/HeaderHome.vue'
  import HeaderHomeV2 from '~/components/Header/HeaderHomeV2.vue';
  import Background from '~/components/Body/Background.vue';
  export default {
    components: {
      Header,
      HeaderHomeV2,
      Background
    }
  }
  </script>
  