const SomeApp = {
  data() {
    return {
      books: [],
      bookForm:{}
    }
  },
  computed: {},
  methods: {
      fetchBookData() {
          fetch('/api/book/')
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.books = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          })
      },
      
      postBook(evt) {        
        console.log("Posting!", this.bookForm);

        fetch('api/book/create.php', {
            method:'POST',
            body: JSON.stringify(this.bookForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            // reset the form
            this.bookForm = {};
          });
      }
      },
  created() {
      this.fetchBookData();
  }

}

Vue.createApp(SomeApp).mount('#bookApp');