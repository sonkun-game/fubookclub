
<template>
    <div class="image-box gap-1">
        <div class="item text_center" v-for="item in 6" :key="item">
            <ImageBase custom_class="image" type="club" :name="'image_' + item + '.jpg'" alt="club image"></ImageBase>
        </div>
    </div>
</template>

<script>
import ImageBase from '../common/ImageBase.vue';

export default {
    name: "BodyDashboard",
    components: {
        ImageBase
    },
    setup() {

    },
}
</script>

<style scoped>
.image {
    width: 100%;
    transition: 1s;
    height: auto;
}

.image:hover {
    width: 150%;
}

.image-box {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row wrap;
}

.item {
    width: 33%;
    background-color: black;
    overflow: hidden;
    height: 375px;
    cursor: pointer;
}

/* .item:hover {
    filter: brightness(0.5);
} */
</style>
