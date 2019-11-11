<template>
  <nav class="navbar navbar-expand-lg navbar-dark nav-back">
    <div class="container">
      <a class="navbar-brand mr-5" href="#">
        <font-awesome-icon icon="headphones" />
        <b>MUSIC</b>BOX
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active"></li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Search</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/playlist">Saved Playlist</router-link>
          </li>
        </ul>

        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary modal-button"
          data-toggle="modal"
          data-target="#exampleModal"
          v-if="modal"
        >
          Added playlist
          <span class="badge badge-light">{{List.length}}</span>
        </button>
        <!-- <div class="navbar-collapse collapse order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My playlist <span class="badge badge-light">{{List.length}}</span>

        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <header-list :itemList="List"/>
              

        </div>
      </li>
        </ul>
        </div>-->

        <!-- <span class="navbar-text">
      Therapy for your ears
        </span>-->
      </div>
    </div>
  </nav>
</template>


<script>
//import HeaderList from "../components/header-list.vue";

export default {
  name: "Header",
  props: ["itemList"],
  // components: {
  //   HeaderList
  // },
  data: function() {
    return {
      modal: true
    };
  },
  computed: {
    List() {
      return this.itemList;
    }
  }
};
</script>

<style>
.navbar-dark .navbar-toggler {
  border: 0px;
}

.navbar .navbar-toggler {
  height: 75px;
}

.nav-back {
  background-color: #003366 !important;
}

.nav-back a {
  color: #ffffff;
}

.navbar-text {
  color: #ffffff;
}

.bg-dark {
  background-color: #073442 !important;
}

.navbar {
  padding: 2rem 1rem !important;
}
</style>

