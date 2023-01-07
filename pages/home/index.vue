<template>
  <div>
    <ImageBase custom_class="bg" name="bg.jpg" type="bg" alt="Logo Image"> </ImageBase>
    <BlackBase></BlackBase>
    <!-- assets\img\logo\logo4.jpg -->
    <!-- <ImageBase name="logo4.png" type="logo" alt="Logo Image"> </ImageBase> -->
  </div>
</template>

<script>
import ImageBase from '@/components/common/ImageBase.vue'
import BlackBase from '@/components/common/BlackBase.vue'

export default {
  layout: 'main_layout',
  components: {
    ImageBase,
    BlackBase
  }
}
</script>

<style scoped>
  .bg {
    width: 100%;
    position: fixed;
    overflow: hidden;
    top: -57vh;
    left: 0;
  }
</style>
