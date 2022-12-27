
<template>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success pink" type="submit">Search</button>
    </form>
</template>

<script>
export default {
  name:'SearchBar',
}
</script>

<style scoped>
  .btn-outline-success.pink {
    color: white;
    border-color: white;
  }
  .btn-outline-success.pink:hover {
    color: #f1b1c1;
    background-color: white;
  }
</style>
