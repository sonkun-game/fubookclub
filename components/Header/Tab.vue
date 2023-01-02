
<template>
  <nav class="navbar navbar-expand-lg navbar-light pl-0 pr-0 pt-0">
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto list-group">
        <!-- list nav bar -->
        <li class="list-group-item list-group-item-action list-fub p-2 flex-fill"
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
  data() {
    return {
      navbar_list: ['About', 'Photo', 'Grade', 'Member', 'Draft', 'Draft']
    }
  },
}
</script>

<style scoped>
* {
  font-size: 18px;
}
</style>
