<template>
  <div>
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

</style>
