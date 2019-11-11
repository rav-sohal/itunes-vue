<template>
  <div class="mb-5 mt-5 container">
    <div class="list-group">
      <!-- <a href="#" class="list-group-item list-group-item-action active">
        Added playlist
        <span class="badge badge-light">{{List.length}}</span>
      </a> -->
      <div v-for="(result, index) in List"
        :key="index" class="mt-3"
      >
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
              class="btn btn-danger float-right"
              v-on:click="removeElement(index)"
            ><font-awesome-icon icon="minus"/> </button>

                    <b>{{result.collectionName}}</b>
                  </h4>
                  <h6 class="mt-0">{{result.artistName}}</h6>
                  <p class="mt-0">{{result.primaryGenreName}}</p>
                </div>
              </div>
              </div>

      <!-- <a
        href="#"
        class="list-group-item list-group-item-action"
        v-for="(result, index) in List"
        :key="index"
      >
        {{result.collectionName}}
        <br>
        <b>{{result.artistName}}</b>
        <br>
        <div class="row">
          <div class="col-md-6">
            <button 
              class="btn btn-danger btn-sm btn-block"
              v-on:click="removeElement(index)"
            ><font-awesome-icon icon="minus"/> </button>
          </div>
          <div class="col-md-6">
            <button
              class="btn btn-info btn-sm btn-block"
              @click="toiTunesAlbum(result)"
            >View on iTunes</button>
          </div>
        </div>
      </a>-->
    </div> 
    

    <button class="btn btn-info mt-5 btn-lg btn-block" @click="saveList()">Save</button>
  </div>

  
</template>

<script>
export default {
  name: "List",
  props: ["itemList"],
//   data: function() {
//     return {
//       result: ["List"],
//     };
//   },
data() {
    return {
      // Define a reversed data property
      reversed: false,
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
  background-color: aqua;
}

.album-container {
  height: 350px;
}

.album-cover {
  width: 80px;
  height: auto;
}
</style>