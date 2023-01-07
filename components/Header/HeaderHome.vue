<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg d-flex justify-content-center">
      <div class="container-fluid">
        <div class="logo">
          <ImageBase custom_class="float-left w-5 pr-2 img_anim" name="logo4.png" type="logo" alt="Logo Image"> </ImageBase>
          <div class="title c_white"> FPTU Book Club </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import ImageBase from '@/components/common/ImageBase.vue'
export default {
  name: "HeaderHome",
  components: { ImageBase }
}
</script>

<style scoped>
  header {
    display: block;
    position: fixed;
    z-index: 9999;
    width: 100%;
    padding:12px
  }
  .title {
    font-family: 'rowdies', Arial, Helvetica, sans-serif;
    font-size: 22px;
  }
  /* logo content image and title */
  .logo {
    width: fit-content;
    cursor: pointer;
  }
  /* logo animation */
  .img_anim{
    transition: 1s;
    min-width: 60px;
  }
  .img_anim:hover {
    transform: rotate(180deg);
  }

</style>
