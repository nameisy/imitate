<template>
   <el-container>
    <!-- 侧边栏 -->
    <el-aside width="16%" class="mock-aside">
      <mo-aside></mo-aside>
    </el-aside>
    <!-- 主要内容 -->
    <el-main style="margin-left:16%;">
      <el-card class="box-card" style="border:0;border-radius:0;padding-left:20px" :body-style="{padding:'10px',color:'#666'}">
        <span v-if="!goBack">{{$route.meta.title}}</span>
        <i v-else class="el-icon-back" @click="$router.go(-1)" style="cursor:pointer"></i>
      </el-card>·
      <!-- 详情 and 列表 -->
      <div style="padding:20px;">
        <router-view></router-view>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue , Watch } from "vue-property-decorator";
import moAside from "@/components/product/Aside.vue";
import bus from "../../utils/bus"

@Component({
  components: {
    moAside,
  },
})
export default class Product extends Vue {
  private goBack = false

  @Watch("$route") 
  private routeChange(to: any , from: any) {
    if (to.name === "linkdetails") {
      this.goBack = true
    } else if ( to.name === "linklist") {
      this.goBack = false
    }
  }

  private created() {
    if (this.$route.name === "linkdetails") {
      this.goBack = true
    }
  }
  
  private mounted() {
    bus.$on("go", (value: any) => {
      console.log(value)
    })
  }
}
</script>

<style>
.mock-aside{
  position: fixed;
  left: 0;
  height: 100%;
}
</style>