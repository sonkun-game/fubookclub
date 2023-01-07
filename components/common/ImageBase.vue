<template>
  <img :class="custom_class" :src="LogoData" :alt="AltData" />
</template>

<script>

export default {
  name: 'ImageBase',
  data() {
    return {
      AltData: this.alt,
      LogoData: require('@/assets/img/' + this.type + '/' + this.name)
    }
  },
  props: {
    custom_class: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'logo'
    },
    alt: {
      type: String,
      default: 'No Image'
    }
  }
}
</script>

<style scoped>

</style>
