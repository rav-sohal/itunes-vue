<template>
  <div class="mb-5 mt-5 container">
    <div class="row">
      <div class="col-md-3" v-for="(result, index) in itemList" :key="index">
        <div class="card playlist-card">
          <img
            :src="resizeArtworkUrl(result)"
            alt="Album Cover"
            class="album-cover align-self-start mr-3"
          />
          <div class="card-body">
            <h5 class="card-title text-truncate">{{result.collectionName}}</h5>
            <p class="card-text">{{result.artistName}}</p>

            <div class="row">
              <div class="col-md-6">
 <button
              class="btn btn-danger btn-sm btn-block"
              v-on:click="removeElement(index)"
            >Remove</button>

              </div>

              <div class="col-md-6">
 <button
              class="btn btn-secondary btn-sm btn-block"
              @click="toiTunesAlbum(result)"
            >View</button>


              </div>
            </div>
           

           
          </div>
        </div>
      </div>
    </div>

    <!--
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">
        My List
        <span class="badge badge-light">{{itemList.length}}</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action" v-for="(result, index) in itemList" :key="index">
        {{result.collectionName}}
        <br>
        <b>{{result.artistName}}</b>
        <br>
        <div class="row">
          <div class="col-md-6">
            <button
              class="btn btn-success btn-sm btn-block"
              v-on:click="removeElement(index)"
            >Remove</button>
          </div>
          <div class="col-md-6">
            <button
              class="btn btn-info btn-sm btn-block"
              @click="toiTunesAlbum(result)"
            >View on iTunes</button>
          </div>
        </div>
      </a>
    </div>
    -->
    <hr>
    <div class="">
    <button class="btn btn-info mt-5 btn-lg btn-block" style="max-width: 250px;margin-left:auto; margin-right: auto;" @click="saveList()">Save</button>
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
            <h5 class="modal-title" id="exampleModalLabel">Playlist</h5>
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
  </div>
</template>

<script>
import List from "../components/myList.vue";

export default {
  name: "HeaderList",
  props: ["itemList"],
  //   data: function() {
  //     return {
  //       result: ["List"],
  //     };
  //   },
  components: {
    List
  },
  data() {
    return {
      // Define a reversed data property
      reversed: false,
      modal: false
    };
  },

  computed: {
    List() {
      return this.itemList;
    }
  },

  methods: {
    saveList() {
      let parsed = JSON.stringify(this.itemList);
      localStorage.setItem("List", parsed);
      /* eslint-disable no-console */

      console.log(this.itemList);
      /* eslint-disable no-console */
      //location.reload();
    },

    removeElement: function(index) {
      this.List.splice(index, 1);
    },

    resizeArtworkUrl(result) {
      return result.artworkUrl100.replace("100x100", "160x160");
    },
    toiTunesAlbum(result) {
      window.open(result.collectionViewUrl, "_blank");
    }
  }
};
</script>

<style scoped>

.album-cover {
  width: 100%;
  height: auto;
  background-color: grey;
}

.album-container {
  height: 350px;
}

.scroll {
  max-height: 300px;
  overflow-y: auto;
  float: right;
}

.playlist-card {
  margin-bottom: 25px;
}

.modal-button {
  display: none !important;
}

/* @media only screen and (max-width: 1440px) {
  .playlist-card {
    height: 475px;
  }
} */

.btn-primary {
  background-color: #708090;
  border-color: #708090;
}
</style>