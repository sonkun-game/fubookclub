<template>
  <div>
    <ImageBase custom_class="bg" name="bg.jpg" type="bg" alt="Logo Image"> </ImageBase>
    <BlackBase></BlackBase>
    <BodyMember></BodyMember>
  </div>
</template>

<script>
import ImageBase from '@/components/common/ImageBase.vue'
import BlackBase from '@/components/common/BlackBase.vue'
import BodyMember from '~/components/Body/BodyMember.vue';

export default {
  layout: 'main_layout',
  components: {
    ImageBase,
    BlackBase,
    BodyMember
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
