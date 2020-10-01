<template>
  <div id="app">
    <div v-if="loading" class="loader loader-curtain is-active"></div>
    <header class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <router-link class="navbar-brand" :to = "{ path: '/' }">Mask Map</router-link>
        <button type="button" class="navbar-nav navbar-toggler"
          data-toggle="collapse" data-target="#navbar-collapse-1">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-collapse-1">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" style="margin-right:10px">
              <router-link :to = "{ path: '/list' }">LIST</router-link>
            </li>
            <li class="nav-item" style="margin-right:10px">
              <router-link :to = "{ path: '/map' }">MAP</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  computed: mapGetters({
    loading: 'getLoading',
  }),
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
