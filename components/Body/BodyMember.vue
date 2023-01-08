
<template>
  <div class="table-container">
    <div class="row dark_background">
      <nav class="scroll_control item white_border-y col-sm-2 p-0">
        <ul>
          <li class="member_list" v-for="(item,index) in list_member"
              :key="index"
              @click="scrollToMember(item.key,item.pos)">
            {{ item.name }}
          </li>
        </ul>
      </nav>
      <div class="item white_border-y col-sm-10">
        <div class="member_list_detail">
          <!-- a block of member -->
          <div>
            <fieldset v-for="(item,index) in list_member" :key="index" :id="'section' + item.key" >
              <template v-if="item.key != '-1' && item.key != '0'">
                <legend class="w-auto">Thành viên fptu Book Club khóa {{ item.key }} : </legend>
                <div class="member_detail_content">
                  <div class="row">
                    <div class="col" v-for="index in 4" :key="index">
                      <figure class="figure d-flex flex-column pt-4">
                        <ImageBase
                          custom_class="figure_image img-thumbnail rounded m-auto"
                          name="damanhtuan.jpg"
                          type="member_avatar"
                          alt="avatar"></ImageBase>
                        <figcaption class="figure-caption m-auto pt-2">Đàm Anh Tuấn</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else-if="item.key == '0'">
                <legend class="w-auto">Các anh chị cán bộ thư viện</legend>
                <div class="member_detail_content">
                </div>
              </template>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageBase from '../common/ImageBase.vue';

export default {
  name: 'BodyMember',
  components: {ImageBase},
  data() {
    return {
      list_member: [
        {
          name: "Thành viên các khóa",
          key: '-1',
          pos: -1,
          members: []
        },
        {
          name: 'Các anh chị thư viện',
          key: '0',
          pos: 0,
          members: [

          ]
        },
        {
          name: 'Khóa 18',
          key: '18',
          pos: 560,
          members: [

          ]
        },
        {
          name: 'Khóa 17',
          key: '17',
          pos: 1110,
          members: [

          ]
        },
        {
          name: 'Khóa 16',
          key: '16',
          pos: 1660,
          members: [

          ]
        },
        {
          name: 'Khóa 15',
          key: '15',
          pos: 2210,
          members: [

          ]
        },
        {
          name: 'Khóa 14',
          key: '14',
          pos: 2760,
          members: [

          ]
        },
        {
          name: 'Khóa 13',
          key: '13',
          pos: 3310,
          members: [

          ]
        },
        {
          name: 'Khóa 12',
          key: '12',
          pos: 3860,
          members: [

          ]
        },
      ],
      list_member_detail: [
        {
          name: 'Son',
          age: '17',
          description: 'Dep Trai',
          image_link: '....',
          key: '12'
        },
        {
          name: 'Son',
          age: '17',
          description: 'Dep Trai',
          image_link: '....',
          key: '12'
        }
      ]
    }
  },
  methods: {
    scrollToMember: (section, pos) => {
      if(section != '-1') {
        $('.member_list_detail').animate({
          scrollTop: pos
        }, 1000)
        // $("#section" + section)[0].scrollIntoView();
      }

    }
  },
}
</script>

<style scoped>
* {
  color: white;
}
/* Scrollbar */
/* width */
::-webkit-scrollbar {
  width: 10px;
  border-radius: 15px;
}
/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  border: 1px white solid;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent;
  border: 1px white solid;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}
figure.figure{
  cursor: pointer;
}
.table-container {
  position: relative;
  width: 95%;
  margin-top: 15vh;
  margin-right: auto;
  margin-left: auto;
}
fieldset {
  position: relative;
  margin-bottom: 5px;
}
/* member list */
ul {
  padding: 0;
}
li.member_list {
  margin: 0;
  list-style: none;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 12px 0 12px 0;
  border-bottom: 1px solid white;
  cursor: pointer;
  font-weight: 500;
}
li.member_list:not(:first-child):hover {
  background-color: rgba(0,0,0,0.8);
  font-size: 20px;
  padding: 18px 0 18px 0;
}
li.member_list:first-child {
  background-color: gray;
  /* color: black; */
}
/* member list detail */
legend {
  text-decoration: underline;
}
.member_list_detail {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 8px;
}
.member_detail_content {
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.figure_image {
  width: 75%;
}
.figure-caption {
  font-size: 16px;
  font-weight: 700;
}
/* other */
.dark_background {
  background-color: rgba(0,0,0,0.7);
  position: relative;
}
.white_border {
  border: 1px solid white;
}
.white_border-y {
  border-color: white;
  border-width: 0 1px 0 1px;
  border-style: solid;
}
.item {
  height: 82vh;
}
</style>
