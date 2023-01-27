
<template>
    <div class="container-fluid ">
        <Background></Background>
        <div class="welcome text_center">
          <div class="content-box">
            <div>
              <ImageBase custom_class="w-25" name="logo3.png" type="logo" alt="Logo Image"> </ImageBase>
            </div>
            <div class="title">Welcome to FptuBook Club</div>
            <a href="dashboard" class="sub_title">Enter site</a>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import ImageBase from '../common/ImageBase.vue';
  import Background from './Background.vue';

  export default {
    components: {
      ImageBase,
      Background
    },
    setup() {
  
    },
  }
  </script>
  
  <style scoped>
  .container-fluid {
    max-width: 100vw;
    overflow-x: hidden;
  }
  .welcome {
    width: 100vw;
    height: 100vh;
  }
  .content-box {
    position: absolute;
    bottom: 155px;
  }
  .title, .sub_title {
    font-family: marzo, sans-serif;
    font-weight: 700;
    color: white;
    font-size: 32px;
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 1);
    cursor: pointer;
  }
  .title:hover {
    text-shadow: 6px 6px 5px rgb(232, 102, 178);
  }
  .sub_title {
    text-decoration: none;
    font-size: 24px;
  } 
  .sub_title:hover {
    text-shadow: 6px 6px 5px rgb(232, 102, 178);
  }
  </style>
  