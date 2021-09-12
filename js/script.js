console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: [],
    selectedGenre: 'All',
  },
  computed: {
    albumSorting() {
      return this.albums.sort((a, b) => { return a.year - b.year; })
    },
    genreList() {
      const list = [];
      this.albums.forEach((album) => {
        if (!list.includes(album.genre)) list.push(album.genre);

      });
      return list;
    },
    filteredAlbums() {
      const albums = this.albumSorting;
      if (this.selectedGenre === 'All') return albums;
      return albums.filter((album) => album.genre === this.selectedGenre);
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




