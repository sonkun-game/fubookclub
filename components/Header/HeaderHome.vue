<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg d-flex justify-content-center">
      <div class="container-fluid">
        <div class="logo">
          <ImageBase custom_class="float-left w-5 pr-2 img_anim" name="logo4.png" type="logo" alt="Logo Image"> </ImageBase>
          <div class="title c_white"> FPTU Book Club </div>
        </div>
        <div class="menu m_home c_white">
          <i class="fa-solid fa-house"></i>Trang chủ
        </div>
        <div class="menu m_about c_white">
          <i class="fa-solid fa-star"></i>Về Clb Sách
        </div>
        <div class="menu m_member c_white">
          <i class="fa-solid fa-people-group"></i>Thành viên
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
  i {
    padding: 4px
  }
  header {
    position: fixed;
    top:0;
    z-index: 9999;
    width: 100%;
    padding:12px
  }
  .title {
    font-family: 'rowdies', Arial, Helvetica, sans-serif;
    font-size: 22px;
    transition: 1s;
  }
  .title:hover {
    font-size: 24px;
  }
  /* logo content image and title */
  .logo {
    width: fit-content;
    cursor: pointer;
  }
  .menu {
    font-family: 'rowdies', Arial, Helvetica, sans-serif;
    font-size: 16px;
    width: fit-content;
    cursor: pointer;
    min-width: 135px;
    padding: 0;
    transition: 1s;
  }
  .menu:hover {
    font-size: 18px;
  }
  .m_home:hover {
    color:greenyellow
  }
  .m_about:hover {
    color: pink;
  }
  .m_member:hover {
    color: yellow;
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
