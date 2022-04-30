<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/vue3">VUE3</router-link> |
    <router-link to="/Vuex-modules">Vuex-modules</router-link> |
    <router-link to="/Vuex-modules-map">Vuex-modules-map</router-link> |
    <router-link to="/script-setup">script-setup</router-link> |
    <router-link to="/setup">setup</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
