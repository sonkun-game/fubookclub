<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light c_fbc_pink_back_low_opacity ">
      <div class="container-fluid">
        <logo></logo>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <search-bar> </search-bar>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from './Logo.vue'
import SearchBar from './SearchBar.vue'

test_main_js();

  export default {
  components: { SearchBar, Logo },
    name: "Header"
  }
</script>

<style scoped>
  header{
    position: fixed;
    top: 0px;
    z-index: 9999;
    width: 100%;
  }
</style>
