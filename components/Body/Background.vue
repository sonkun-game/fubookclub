
<template>
    <div class="img-container">
        <ImageBase custom_class="bg" name="bg.jpg" type="bg" alt="Logo Image"> </ImageBase>
        <!-- <BlackBase></BlackBase> -->
    </div>
</template>

<script>
import ImageBase from '@/components/common/ImageBase.vue'
import BlackBase from '@/components/common/BlackBase.vue'

export default {
    name: 'Background',
    components: {
        ImageBase,
        BlackBase,
    }
}
</script>

<style scoped>
.img-container {
    height: 10vh;
}
.bg {
  width: 100%;
  position: fixed;
  overflow: hidden;
  top: -300px;
  left: 0;
}
</style>
