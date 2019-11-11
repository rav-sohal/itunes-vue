<template>
      <div class="hero"></div>
</template>

<script>

export default {
   name: "HeaderImage",

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

  
};
</script>

<style>

.hero {
  height: 500px;
  width: 100%;
  background-image: url('../assets/background-image.jpg');
  background-repeat: no-repeat;
  margin-bottom: 50px;

}
</style>