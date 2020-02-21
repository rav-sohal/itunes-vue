<template>
  <div class="container search">
    <div class="row">
      <div class="col-md-12">
    <header-list :itemList="List"/>
      </div>
    </div>
    <!-- <div class='div' v-bind:class="[isActive ? 'red' : 'blue']" @click="toggleClass()"></div> -->
  </div>
</template>

<script>
import HeaderList from "../components/header-list.vue";

export default {
  name: "PLaylist",
  components: {
    HeaderList
  },
  data: function() {
    return {
      title: "Simple Search",
      isActive: true,
      intro: "This is a simple hero unit, a simple jumbotron-style.",
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
      disableButton: false
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
      /* eslint-disable no-console */
      console.log(result);
      /* eslint-disable no-console */
    },

    resizeArtworkUrl(result) {
      return result.artworkUrl100.replace("100x100", "160x160");
    },
    
  },
  mounted() {
    if (localStorage.getItem("List")) {
      try {
        this.List = JSON.parse(localStorage.getItem("List"));
      } catch (err) {
        console.err(err);
      }
    }
  },
};


</script>

<style>
.loading {
  background-image: url("../assets/Rolling-1s-42px.gif");
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  margin: 15px;
  margin-left: auto;
  margin-right: auto;
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

.red {
  background: red;
}

.blue {
  background: blue;
}

.div {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
}
</style>
