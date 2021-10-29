const SomeApp = {
  data() {
    return {
      books: [],
      bookForm:{},
      selectedBook: null,

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
      selectBook(s) {
        if (s == this.selectedBook) {
            return;
        }
        this.selectedBook = s;
        this.books = [];
        this.fetchBookData(this.selectedBook);
    },
    postBook(evt) {
      if (this.selectedBook === null) {
          this.postNewBook(evt);
      } else {
          this.postEditBook(evt);
      }
    },
      postNewBook(evt) {        
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
      },
      postEditBook(evt) {        
        this.bookForm.title = this.selectedBook.title;        
        console.log("Updating!", this.bookForm);

        fetch('api/book/update.php', {
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
            
            this.resetBookForm();
          });
      },
      postDeleteBook(o) {
        if (!confirm("Are you sure you want to delete the book "+o.title+"?")) {
            return;
        }
        
        fetch('api/book/delete.php', {
            method:'POST',
            body: JSON.stringify(o),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            this.resetBookForm();
          });
      },
      selectBookForEdit(o) {
        this.selectedBook = o;
        this.bookForm = Object.assign({}, this.selectedBook);
    },
      resetBookForm() {
        this.selectedBook = null;
        this.bookForm = {};
      },
      },
  created() {
      this.fetchBookData();
  }

}

Vue.createApp(SomeApp).mount('#bookApp');