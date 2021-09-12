console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: [],
  },
  computed: {
    albumSorting() {
      return this.albums.sort((a, b) => { return a.year - b.year; })
    }
  },
  methods: {},
  created() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((res) => {
      const response = res.data.response;
      this.albums = response;
    })
  }
});





// {
//   "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
//   "title": "New Jersey",
//   "author": "Bon Jovi",
//   "genre": "Rock",
//   "year": "1988"
// },