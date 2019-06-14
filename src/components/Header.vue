<template>
  <el-row style="background:#545c64;height:50px">
    <el-col :span="4">
      <div class="grid-content bg-purple">
        <img src="../assets/img/img.jpg" alt="" style="width:40px;height:50px">
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <el-menu :default-active="$route.path" background-color="#545c64" active-text-color="#999" :router="true" text-color="#ffffff" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="/product/linklist">业务线</el-menu-item>
          <el-menu-item index="/api">添加接口</el-menu-item>
          <el-menu-item index="/expecttion">在线编辑期望</el-menu-item>
          <el-menu-item index="/mocklog">调用日志</el-menu-item>
          <el-menu-item index="/domainip">透传维护</el-menu-item>
        </el-menu> 
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple" style="text-align: right;line-height: 50px;padding-right:10px">
        <span style="padding:0 10px;color:#ffffff">{{mail}}</span>
        <i class="icon-hkquit iconfont quit" @click="quit"></i>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from "vuex-class"
import { logout } from '../api/sso'
 
@Component

export default class Header extends Vue {
  @Getter mail: any

  private quit() {
    logout()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-content .el-menu-item{
  height:50px;
  line-height:50px;
}
.iconfont {
  cursor: pointer
}
.el-menu-demo {
  min-width: 500px
}
</style>
