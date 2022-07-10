<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light c_fbc_pink_back_low_opacity ">
      <div class="container-fluid">
        <a class="navbar-brand c_white" href="#">FU BOOK CLUB</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"  >Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success pink" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>


<style scoped>
  header{
    position: fixed;
    top: 0px;
    z-index: 9999;
    width: 100%;
  }
  .btn-outline-success.pink {
    color: white;
    border-color: white;
  }
  .btn-outline-success.pink:hover {
    color: #f1b1c1;
    background-color: white;
  }
  .nav-link {
    color: white !important;
  }
  .nav-link:hover {
    color: #f1b1c1 !important;
    background-color: white;
  }
</style>

<script>
export default {
  name: "Header"
}
</script>
