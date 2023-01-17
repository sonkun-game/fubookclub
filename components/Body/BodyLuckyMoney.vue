
<template>
  <div class="container px-4 py-4">
    <div class="d-grid gap-3">
        <div class="row">
          <div class="col-sm-6">
            <div class="row gap-3">
              <div class="col" v-for="(item) in envelop" :key="item.id">
                <i class="open_envelop fa-solid fa-envelope fs-72"></i>
                <p>{{item.id}}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="envelop-container">
              <div class="result">
                <div class="content hidden">
                  <p> Price : 45,000 VND</p>
                </div>
              </div>
              <div class="money-withdraw" id="money_withdraw">
                <div class="pull-up" id="pull_up"></div>
                <ImageBase
                  custom_class="lucky_money"
                  alt="LUCKEY_MONEY"
                  type="other"
                  name="hundred.jpeg">
                </ImageBase>
              </div>
              <ImageBase
                custom_class="envelop"
                alt="ENVELOP"
                type="other"
                name="envelop.jpg">
              </ImageBase>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import main from '@/mixins/main'
import ImageBase from '@/components/common/ImageBase.vue'

export default {
  name: 'bodyluckymoney',
  components: {
    ImageBase
  },
  mixins: [main],
  data() {
    return {
      envelop: this.getLuckyMoney(),
    }
  },
  mounted() {
    $(document).ready(function () {
        var isDraging = false;
        $('.fa-envelope').hover(function () {
            $(this).addClass('fa-envelope-open');
            $(this).removeClass('fa-envelope');
        }, function () {
            $(this).addClass('fa-envelope');
            $(this).removeClass('fa-envelope-open');
        });

        $('#money_withdraw').mousedown((event) => {
          isDraging = true
        })

        $('#money_withdraw').mousemove((event) => {
          if(isDraging) {
            $('#pull_up').css('top',event.pageY - 100)
            $('.lucky_money').css('top',event.pageY + 70)
            if($('#pull_up').offset().top <= 90) {
              $('.content').removeClass('hidden')
            }
          }
        })

        $('#money_withdraw').mouseup((event) => {
          isDraging = false
          // $('#pull_up').css('top','220px')
          // $('.lucky_money').css('top','390px')
          // $('.content').addClass('hidden')
        })

        $('.open_envelop').click(() => {
          $('#pull_up').css('top','220px')
          $('.lucky_money').css('top','390px')
          $('.content').addClass('hidden')
        })
    });
  },
}
</script>

<style scoped>
.container {
  border: 1px yellowgreen solid;
  height: 90vh;
}
.row {
  border: 1px black solid;
  height: 150px;
}
.col {
  height: 100%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  color: red;
}
.col .fa-envelope {
  display: block;
}

.result {
  height: 50px;
}
.money-withdraw {
  position: relative;
  width: 246px;
  height: 250px;
  margin: auto;
  border: 1px brown solid;
  overflow: hidden;
}
.envelop-container {
  display: flex;
  flex-direction: column;
  padding: 14px;
  justify-content: flex-end;
  text-align: center;
}
.pull-up {
  width: 244px;
  height: 30px;
  background-color: thistle;
  position: absolute;
  top: 220px;
  cursor: pointer;
}
.lucky_money {
  width: 500px;
  transform: rotate(90deg);
  position: relative;
  left: -127px;
  top: 390px;
  cursor: pointer;
}
.envelop {
  margin: auto;
  z-index: 999;
}
</style>
