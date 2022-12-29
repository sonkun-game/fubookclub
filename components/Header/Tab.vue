
<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto list-group">
        <li class="list-group-item list-group-item-action list-fub p-2"
            v-for="(item,index) in navbar_list"
            :key="index">
          <a class="nav-link" href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Tab',
  data() {
    return {
      navbar_list: ['About', 'Photo', 'Grade']
    }
  },
}
</script>

<style scoped>
* {
  font-size: 18px;
}
</style>
