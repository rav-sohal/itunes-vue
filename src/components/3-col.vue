<template>
  <div class="container three-col">
    <div class="row">
      <div class="col-4">
        <div class="card">
          <img v-bind:src="image" class>
          <div class="card-body">
            <p class="card-text">{{intro}}</p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <img v-bind:src="image" class>

          <div class="card-body">
            <p class="card-text">{{intro}}</p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <img v-bind:src="image" class>

          <div class="card-body">
            <p class="card-text">{{intro}}</p>
          </div>
        </div>
      </div>
    </div><br />
        <router-link class="btn btn-primary btn-lg" to="/home">back</router-link>

  </div>


</template>

<script>
export default {
  name: "ThreeColumn",
  data: function() {
    return {
      title: "This is the ultimate title",
      intro:
        "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
      image: "https://via.placeholder.com/150"
    };
  }
};
</script>

<style>
.three-col {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
