<template>
  <img :class="getCustomClass" :src="LogoData" :alt="AltData" />
</template>

<script>

export default {
  name: 'ImageBase',
  data() {
    return {
      AltData: this.alt,
      LogoData: require('@/assets/img/' + this.type + '/' + this.name),
      CustomClass: this.custom_class,
      NotAllowSelectDrag: this.not_allow_select_drag
    }
  },
  props: {
    custom_class: {
      type: String,
      default: ''
    },
    not_allow_select_drag: {
      type: Boolean,
      default: true
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
  },
  computed: {
    getCustomClass() {
      if(this.NotAllowSelectDrag) return this.CustomClass + ' not_allow_select'
      return this.CustomClass
    }
  }
}
</script>

<style scoped>

</style>
