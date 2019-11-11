<template>
<div class="hero">
  <div class="container search">
    <div class="row">
      <div class="col-md-12">
        <div class="mt-5" style="clear:both">
          <h1>{{title}}</h1>
          <p class="lead mb-5">{{intro}}</p>
          <p v-if="validated" :class="errorTextClass">Enter a valid search term</p>

          <!-- <button
            type="button"
            class="btn btn-primary btn-lg mb-3 mr-3"
            v-on:click="refreshPage"
            v-if="result.length > 1"
          >
            <font-awesome-icon icon="redo"/> Start again
          </button>-->

          <!-- <router-link class="btn btn-primary btn-lg mb-3" to="/playlist"> <font-awesome-icon icon="list"/> My Playlist</router-link> -->

          <form>
            <div class="form-row">
              <div class="form-group col-md-9 mb-2">
                <label for="inputPassword2" class="sr-only">Search</label>
                <input
                  class="form-control form-control-lg mb-3"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  v-model="search"
                  required
                  autocomplete="off"
                  id="search"
                />
              </div>
              <div class="form-group col-md-3 mb-2">
                <button
                  class="btn btn-info btn-lg btn-block mb-3"
                  type="submit"
                  v-on:click="getData"
                >
                  <font-awesome-icon icon="search" />Search
                </button>
              </div>
            </div>
          </form>

          <div class="result-div">
            <div v-for="(result, index) in paginated" :key="index">
              <div class="media mb-4">
                <img
                  :src="resizeArtworkUrl(result)"
                  alt="Album Cover"
                  class="album-cover align-self-start mr-3"
                />
                <div class="media-body">
                  <h4 class="mt-0">
                    <!-- <button
                type="button"
                class="btn btn-primary btn-lg mb-3 float-right"
                v-on:click="addItem(result)"
              >
                <font-awesome-icon icon="plus"/>
                    </button>-->

                    <button
                      type="button"
                      class="btn btn-primary btn-lg mb-3 float-right"
                      v-on:click="addItem(result)"
                      :disabled="result.disableButton"
                    >
                      <font-awesome-icon icon="plus" />
                    </button>

                    <b>{{result.collectionName}}</b>
                  </h4>
                  <h6 class="mt-0">{{result.artistName}}</h6>
                  <p class="mt-0">{{result.primaryGenreName}}</p>
                </div>
              </div>
            </div>

            <div class="paginated-btns mb-3 mt-3" v-if="result.length > 1 ">
              <button
                class="btn btn-secondary btn-lg mr-3 pag-btn"
                :disabled="page === 0"
                @click="prevPage"
              >Previous</button>
              <button
                class="btn btn-secondary btn-lg pag-btn"
                :disabled="page >= pageCount - 1"
                @click="nextPage"
              >Next</button>
            </div>

            <p v-if="result.length > 1">Page {{page + 1}} of {{pageCount}}</p>

            <div :class="loadingClass" v-if="loading"></div>
            <br />
          </div>
        </div>

        <div class="col-md-12"></div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Added Playlist</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <List :itemList="List" />
          </div>
        </div>
      </div>
    </div>
  <!-- end Modal -->

    <!-- <div class='div' v-bind:class="[isActive ? 'red' : 'blue']" @click="toggleClass()"></div> -->
  </div>
  </div>
</template>

<script>
import List from "../components/myList.vue";

export default {
  name: "Hero",
  components: {
    List
  },

  props: {
    size: { type: Number, required: false, default: 5 }
  },

  data: function() {
    return {
      title: "Search",
      isActive: true,
      intro: "Search for your favourite artist or album from the iTunes store.",
      subintro:
        "It uses utility classes for typography and spacing to space content out.",
      result: [],
      errors: [],
      List: [],
      search: "",
      loading: "",
      message: false,
      isValidationAllowed: false,
      loadingClass: "loading",
      errorTextClass: "error-text",
      disableButton: false,
      page: 0
    };
  },

  watch: {
    search: function(val) {
      if (!val) {
        this.result = [];
      }
    }
  },

  computed: {
    validated() {
      return this.isValidationAllowed && !this.search;
    },
    isDisabled: function() {
      return !this.terms;
    },
    pageCount() {
      let l = this.result.length,
        s = this.size;
      return Math.floor(l / s);
    },
    paginated() {
      const start = this.page * this.size,
        end = start + this.size;
      return this.result.slice(start, end);
    }
  },

  methods: {
    getData: function() {
      this.isValidationAllowed = true;
      this.loading = true;
      fetch(`https://itunes.apple.com/search?term=${this.search}&entity=album`)
        .then(response => response.json())
        .then(data => {
          this.result = data.results;
          this.loading = false;
          /* eslint-disable no-console */
          console.log(data);
          /* eslint-disable no-console */
        });
    },

    nextPage() {
      this.page++;
    },
    prevPage() {
      this.page--;
    },

    toggleClass: function() {
      // Check value
      if (this.isActive) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },

    refreshPage: function() {
      this.search = "";
    },
    addItem: function(result) {
      result.disableButton = true; // Or result['disableButton'] = true;
      this.List.push(result);
      this.$emit("updateList", this.List);
      /* eslint-disable no-console */
      console.log(result);
      /* eslint-disable no-console */
    },

    resizeArtworkUrl(result) {
      return result.artworkUrl100.replace("100x100", "160x160");
    }
  },
  mounted() {
    if (localStorage.getItem("List")) {
      try {
        this.List = JSON.parse(localStorage.getItem("List"));
        this.$emit("updateList", this.List);
      } catch (err) {
        /* eslint-disable no-console */
        console.err(err);
        /* eslint-disable no-console */
      }
    }
  }
};
</script>

<style>
@media only screen and (max-width: 420px) {
  .result-div {
    margin-top: 50px !important;
  }
}

.loading {
  background-image: url("../assets/Rolling-1s-42px.gif");
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  margin: 15px;
  padding-top: 120px;
  margin-left: auto;
  margin-right: auto;
}

.result-div {
  margin-top: 200px;
}

h1 {
  font-size: 72px;
  color: #ffffff;
  font-weight: bold;
}

.lead {
  color: #ffffff;
  font-weight: bold;
}

/* .search {
  margin-top: -500px;
} */

.hero {
  height: auto;
  width: 100%;
  background-image: url('../assets/background-image.jpg');
  background-repeat: no-repeat;
  /* margin-bottom: 50px; */
}

.error-text {
  color: red;
}

.media {
  text-align: left;
}

.album-cover {
  width: 80px;
  height: auto;
}

.div {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
}

.pag-btn {
  width: 120px !important;
}
</style>