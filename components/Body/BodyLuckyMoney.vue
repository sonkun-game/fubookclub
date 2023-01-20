
<template>
  <div class="container px-4 py-4">
    <div class="d-grid gap-3">
      <div class="row">
        <div class="col-sm-6">
          <div class="row gap-3">
            <!-- show grid of envelop -->
            <div class="col" v-for="(item) in envelop" :key="item.id"
              @click="changeCurrentShowedEnvelopMoney(item,item.value)">
              <i class="open_envelop fa-solid fa-envelope fs-72"></i>
              <p>{{ item.id }}</p>
              <div class="disabled_envelop" v-if="item.is_opened"></div>
            </div>
            <!-- show sum of money in each evelop -->
            <p>Sum : {{ getSumOfEnvelop() }}</p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="envelop-container">
            <div class="result">
              <div class="content hidden">
                <p> Price : {{ current_show_envelop_money }}</p>
              </div>
            </div>
            <div class="money-withdraw" id="money_withdraw">
              <div class="pull-up" id="pull_up">
                <i class="fa-solid fa-up-down"></i>
              </div>
              <Money custom_class="lucky_money" :money_value="current_money_value">
              </Money>
            </div>
            <ImageBase custom_class="envelop" alt="ENVELOP" type="other" name="envelop.jpg">
            </ImageBase>
          </div>
        </div>
      </div>
    </div>

    <!-- Debug board -->
    <div class="debug hidden">
      <p class="debug_pull_up_top">0</p>
    </div>
  </div>
</template>

<script>
import main from '@/mixins/main'
import ImageBase from '@/components/common/ImageBase.vue'
import Money from '@/components/common/Money.vue'

export default {
  name: 'bodyluckymoney',
  components: {
    ImageBase,
    Money
  },
  mixins: [main],
  data() {
    return {
      envelop: this.getLuckyMoney(),
      current_show_envelop_money: '',
      current_money_value: '',
    }
  },
  methods: {
    getSumOfEnvelop() {
      let sum = 0;
      this.envelop.forEach(item => {
        sum += parseInt(item.value)
      });
      return this.formatCurrentShowEnvelopMoney(sum);
    },
    changeCurrentShowedEnvelopMoney(current_item,new_money) {
      if(!current_item.is_opened) {
        this.current_show_envelop_money = this.formatCurrentShowEnvelopMoney(new_money);
        this.current_money_value = new_money;
      }
      current_item.is_opened = true
    },
    formatCurrentShowEnvelopMoney(money) {
      return new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(money)
    }
  },
  mounted() {
    $(document).ready(function () {
      var isDraging = false;

      // envelop hover event
      $('.fa-envelope').hover(function () {
        $(this).addClass('fa-envelope-open');
        $(this).removeClass('fa-envelope');
      }, function () {
        $(this).addClass('fa-envelope');
        $(this).removeClass('fa-envelope-open');
      });

      // when you hold the pull up
      $('#money_withdraw').mousedown((event) => {
        isDraging = true
      })

      // when you move the pull up
      $('#money_withdraw').mousemove((event) => {

        // debug pull up top scroll css
        // $('.debug_pull_up_top').html('pull up top : ' + $('#pull_up').offset().top)

        if (isDraging) {
          $('#pull_up').css('top', event.pageY - 100)
          $('.lucky_money').css('top', event.pageY - 70)
          if ($('#pull_up').offset().top <= 90) {
            isDraging = false
            $('.content').removeClass('hidden')
          }
        }
      })

      // when mouse out of the pull
      $('#money_withdraw').mouseup((event) => {
        isDraging = false
      })

      //  when you click on the envelop
      $('.open_envelop').click(() => {
        $('#pull_up').css('top', '220px')
        $('.lucky_money').css('top', '390px')
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

p {
  user-select: none;
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

.disabled_envelop {
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  border-radius: 15px;
  opacity: 0.7;
}
.pull-up {
  width: 244px;
  height: 30px;
  background-color: thistle;
  position: absolute;
  top: 220px;
  cursor: pointer;
}

.envelop {
  margin: auto;
  z-index: 999;
}
</style>
