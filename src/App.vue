<template>
  <div id="app">
    <Header :itemList="List"></Header>
    <!-- <HeaderImage></HeaderImage> -->
    <router-view v-on:updateList="updateList"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
// import HeaderImage from "./components/header-image.vue";

export default { 
  name: "app",
  data() {
    return {
      List: []
    }
  },
  components: {
    Header,
    Footer, 
    // HeaderImage
   },
   methods: {
     updateList(value) {
       this.List = value;
     }
   }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
