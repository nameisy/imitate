<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getUserInfo } from "./api/axios"

@Component
export default class App extends Vue {
  
}
</script>

<style>
body,html{
  margin: 0;
  background: #eeeeee;
  height:100%;
}
#app{
  height:100%;
}
</style>
