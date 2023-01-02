<template>
<div>
  <div class="d-flex">
    <!-- list nav bar -->
    <a
      href="#"
      class="p-2 flex-fill list-fub p-2 title"
      v-for="(item, index) in navbar_list"
      :key="index"
    >
      {{ item }}
    </a>
  </div>
  <!-- body content -->
  <button class="block" @click="nextSlider()">test slide</button>
  <div class="row-container" id="slider">
    <div class="item" :class="item.bg_color"  v-for="(item,index) in test_data" :key="index">
      {{ item.text }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FlexTab',
  data() {
    return {
      navbar_list: ["About", "Photo", "Grade", "Member", "Draft", "Draft"],
      slide_page: this.count_page,
      max_slide_page: this.max_page,
      test_data: [
        {
          key: 1,
          text: 'My Text 1',
          bg_color: 'bg-warning'
        },
        {
          key: 2,
          text: 'My Text 2',
          bg_color: 'bg-info'
        },
        {
          key: 3,
          text: 'My Text 3',
          bg_color: 'bg-primary'
        }
      ]
    };
  },
  props: {
    count_page: {
      type: Number,
      default: 1
    },
    max_page: {
      type: Number,
      default: 3
    },
    page_item: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    nextSlider: function() {
      if(this.slide_page < this.max_slide_page) {
        $('#slider').animate({
          left: "-=100vw",
        }, 1000);
        this.slide_page += 1
      } else {
        $('#slider').animate({
          left: "0",
        }, 1000);
        this.slide_page = 1
      }
    }
  },
};
</script>

<style scoped>
* {
  font-size: 18px;
}
.title {
  text-align: center;
  text-decoration: none;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
}
.list-fub {
  color: #5b5b5b;
  background-color: white;
  border-color: #707070;
}
.list-fub:focus, .list-fub:hover {
  color: white;
  background-color: #f1b1c1;
  border-color: white;
}
.row-container {
  width: 300vw;
  height: 90vh;
  display: grid;
  grid-template-columns: auto auto auto;
  position: relative;
  left: 0;
}
.item {
  display: inline;
  width: 100%;
  height: 100%;
}
</style>
