<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },

  data() {
    return {
      isRouterAlive : true,
    };
  },

  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      })
    },
  },

  components: {
      NavBar
  }
}
</script>

<style>


</style>
