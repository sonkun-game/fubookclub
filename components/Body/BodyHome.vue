<template>
    <div class="container p-5 mt-12">
        <div class="row gap-3 mb-rem-1 main_title">
            <!-- <div class="col-6">
                <div class="row h-100 text_center">
                    <i class="fs-100 fa-brands fa-earlybirds"></i>
                    <span>Welcome to Fubook Club</span>
                    <ImageBase
                        custom_class="fit_image border-white rounded-circle p-0"
                        name="logo_welcome.jpg"
                        type="logo"
                        alt="logo_image"
                    >
                    </ImageBase>
                </div>
            </div> -->
            <div class="col py-2">
                <!-- <div class="row gap-3 right_title mb-rem-1 text_center bg_dark">
                    <span>About Us</span>
                </div>
                <div class="row gap-3 right_title mb-rem-1 text_center bg_dark">
                    <span>Recruitment</span>
                </div>
                <div class="row gap-3 right_title text_center bg_dark">
                    <span>Activity</span>
                </div> -->
            </div>
        </div>

        <div class="row gap-3 mb-rem-1 about-us bg_dark">
            <h3>#AboutUs</h3>
            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>

        <div class="row gap-3 mb-rem-1 recruitment bg_dark">
            <h3>#Recruitment</h3>
            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>

        <div class="row gap-3 mb-rem-1 activity bg_dark">
            <h3>#Recruitment</h3>
            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>

        <!-- Blank space area -->
        <div class="blank h-min-25"></div>
    </div>
</template>

<script>
import ImageBase from '../common/ImageBase.vue';

export default {
    components: {
        ImageBase
    },
}
</script>

<style scoped>
.container {
    color: white;
    font-family: rowdies;
    font-size: 20px;
    position: relative;
    z-index: 999;
}
.main_title {
    height: 100%;
    border-radius: 5px;
}

.border-white {
    border: 5px white solid;
}
.bg_dark {
    background-color: rgba(0, 0, 0, 0.8);
}
.bg_red {
    background-color: rgba(255, 5, 5, 1);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.row {
    /* border: 1px solid white; */
    min-height: 160px;
    border-radius: 15px;
}

.main_page {
    background-color: yellowgreen;
}

.col,
.col-6,
.col-3,
.col-9,
.col-8 {
    min-height: 150px;
    cursor: pointer;
    border-radius: 15px;
}

.about-us, .recruitment, .activity {
    padding: 12px;
}
</style>
