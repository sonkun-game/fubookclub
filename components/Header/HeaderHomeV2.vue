<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg d-flex justify-content-center">
            <div class="list_header">
                <h3 class="title">FPTU BOOK CLUB</h3>
                <p class="sub_title mb-32">we are <i>friend with books</i></p>
                <div class="list_menu">
                    <a class="item">
                        Portfolio
                    </a>
                    <a class="item">
                        Member
                    </a>
                    <a class="item">
                        About Us
                    </a>
                    <a class="item">
                        Section 1
                    </a>
                    <a class="item">
                        Section 2
                    </a>
                    <a class="item">
                        Section 3
                    </a>
                </div>
            </div>
            
        </nav>
    </header>
</template>

<script>
import ImageBase from '@/components/common/ImageBase.vue'
export default {
    name: "HeaderHome",
    components: { ImageBase }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
a:hover {
    color: #f1b1c1;
}
/* Header */
.navbar {
    background-color: #eff0f3;
    min-height: 206px;
}
.title {
    font-family: playfair, sans-serif;
    font-size: 32px;
}
.sub_title {
    font-family: aboreto, sans-serif;
    font-size: 14px;
}
.list_menu {
    width: 70vw;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8px;
}
.list_menu .item {
    font-family: liontype, sans-serif;
    font-size: 14px;
    font-style: italic;
    flex-grow: 1;
    align-items: center;
    text-align: center;
    cursor: pointer;
}
.list_header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
i {
    padding: 4px
}

header {
    top: 0;
    width: 100%;
}

/* logo content image and title */
.logo {
    width: fit-content;
    cursor: pointer;
}

.menu {
    font-family: 'rowdies', Arial, Helvetica, sans-serif;
    font-size: 16px;
    width: fit-content;
    cursor: pointer;
    min-width: 135px;
    padding: 0;
    transition: 1s;
}

.menu:hover {
    font-size: 18px;
}

.m_home:hover {
    color: greenyellow
}

.m_about:hover {
    color: pink;
}

.m_member:hover {
    color: yellow;
}

/* logo animation */
.img_anim {
    transition: 1s;
    min-width: 60px;
}

.img_anim:hover {
    transform: rotate(180deg);
}
</style>
