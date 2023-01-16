
<template>
  <div class="container px-4 py-4">
    <div class="d-grid gap-3">
      <div class="row gap-3" v-for="(item,index) in 5" :key="index" >
        <div class="col gap-5">
          <i class="fa-solid fa-envelope fs-72"></i>
        </div>
        <div class="col gap-5">
          <i class="fa-solid fa-envelope fs-72"></i>
        </div>
        <div class="col gap-5">
          <i class="fa-solid fa-envelope fs-72"></i>
        </div>
        <div class="col gap-5">
          <i class="fa-solid fa-envelope fs-72"></i>
        </div>
        <div class="col gap-5">
          <i class="fa-solid fa-envelope fs-72"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      envelop: [

      ]
    }
  },
  mounted() {
    $(document).ready(function () {
        $('.fa-envelope').hover(function () {
            $(this).addClass('fa-envelope-open');
            $(this).removeClass('fa-envelope');
        }, function () {
            $(this).addClass('fa-envelope');
            $(this).removeClass('fa-envelope-open');
        });
    });
  },
}
</script>
export default {
  components: {
    BodyLuckyMoney
  },
}
</script>

<style scoped>
.col {
  height: 150px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: red;
  /* background-color: yellow; */
}

/* \f2b6 \f0e0 */
/* col envelop close and open */
.col .fa-envelope {
  display: block;
}
.col:hover {
  /* background-color: chartreuse; */
}
</style>
