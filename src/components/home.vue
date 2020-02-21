<template>
<Hero v-on:updateList="updateList"></Hero>
</template>

<script>
import Hero from '../components/hero.vue'

export default {
  name: 'Home',
  components: {
    Hero, 
  },
  methods: {
     updateList(value) {
       this.$emit('updateList', value)
     }
   }
}
</script>
<style>
</style>
