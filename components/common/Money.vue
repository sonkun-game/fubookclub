
<template>
    <div :class="'money ' + CustomClass + ' ' + MoneyColor">
        <ImageBase name="logo3.png" type="logo" alt="owl_image" custom_class="owl_sympol not_allow_select">
        </ImageBase>
        <div class="money_container">
            {{ MoneyValue }}
        </div>
    </div>
</template>

<script>
import math from '@/mixins/math'
import ImageBase from './ImageBase.vue'

export default {
    name: 'Money',
    mixins: [math],
    components: {
        ImageBase
    },
    data() {
        return {
            CustomClass: this.custom_class,
            MoneyValue: this.money_value,
            MoneyColor: 'color_10k'
        }
    },
    props: {
        custom_class: {
            type: String,
            default: ''
        },
        money_value: {
            type: String,
            default: ''
        }
    },
    watch: {
        money_value: function () {
            this.MoneyValue = this.money_value.substring(0, this.money_value.length - 3) + 'K'
            try {
                let check = parseInt(this.money_value)
                if (this.between(check, 11000, 20000)) {
                    this.MoneyColor = 'color_20k'
                } else if (this.between(check, 20000, 50000)) {
                    this.MoneyColor = 'color_50k'
                } else if (this.between(check, 50000, 100000)) {
                    this.MoneyColor = 'color_100k'
                } else if (this.between(check, 100000, 200000)) {
                    this.MoneyColor = 'color_200k'
                } else {
                    this.MoneyColor = 'color_10k'
                }
            } catch (e) {
                console.error(e)
            }
        }
    }
}
</script>

<style scoped>
.money {
    width: 245px;
    height: 500px;
    position: relative;
    left: 0px;
    top: 250px;
    cursor: pointer;
}

.owl_sympol {
    width: 40%;
}

.money_container {
    width: 100%;
    height: 10px;
    color: white;
    font-size: 26px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.color_10k {
    background-color: #e1d9b1;
}

.color_20k {
    background-color: #75b5db;
}

.color_50k {
    background-color: #e0aaa8;
}

.color_100k {
    background-color: #b4dfa9;
}

.color_200k {
    background-color: #f45051;
}
</style>
