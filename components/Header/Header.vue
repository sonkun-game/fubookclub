<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light c_fbc_pink_back_low_opacity p-0">
      <div class="container-fluid">
          <!-- logo -->
          <logo></logo>
          <!-- search bar -->
          <search-bar> </search-bar>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from './Logo.vue'
import SearchBar from './SearchBar.vue'


export default {
components: { SearchBar, Logo },
  name: "Header"
}
</script>

<style scoped>
  header{
    display: block;
    /* position: fixed;
    top: 0px; */
    z-index: 9999;
    width: 100%;
  }
</style>
