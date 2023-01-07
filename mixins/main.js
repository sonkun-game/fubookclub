const main = {
  methods: {
    global_test: () => {
      console.log('test mixins')
    },
    global_img: (image_name, type = 'other') => {
      return '@/assets/img/' + type + '/' + image_name;
    }

  },
}
export default main
