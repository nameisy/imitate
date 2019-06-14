<template>
  <el-container style="height:100%">
    <!-- 头部 -->
    <el-header class="mock-header">
      <mo-header></mo-header>
    </el-header>
    <!-- 内容 -->
    <el-container style="margin-top:50px">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import moHeader from "@/components/Header.vue"
@Component({
  components: {
    moHeader,
  },
})
export default class Home extends Vue {
}
</script>
<style>
.el-header,.el-main{
  padding: 0;
}
.mock-header{
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  z-index: 99;
}
</style>
