<template>
  <el-row class="tac" style="height:100%">
    <el-col :span="24" style="height:100%">
        <el-menu style="height:100%" :default-active="'0-0'" class="el-menu-vertical-demo">
            <el-submenu v-for="(value,index) in productList" :key="index" :index="index + '1'" >
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{value.projectName}}</span>
                    <i class="el-icon-circle-plus" slot="reference" @click.stop="addProduct(value.projectName)"></i>
                </template>
                <el-menu-item-group v-for="(val,indexExp) in value.name" :key="indexExp">
                    <el-menu-item :index="index + '-' + indexExp" @click="goDetails(val)">{{val}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
        
        <!-- add product -->
        <mo-addproduct-box
        :visible = "dialogFormVisible" 
        :dialogFormVisible.sync = "dialogFormVisible" 
        v-if="dialogFormVisible"
        :productList = "productList"
        :productName = "productName">
        </mo-addproduct-box>
    </el-col>
</el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getProduct } from "../../api/axios"
import bus from "../../utils/bus"
import moAddproductBox from "./AddProductBox.vue"

@Component({
    components: {
        moAddproductBox
    }
})
export default class Aside extends Vue {
    private  productName = ''
    private productList = []
    private color = true
    private dialogFormVisible = false

    private created() {
        getProduct("/product").then( ( data: any ) => {
            this.productList = data.date.project
        })
    }

    private goDetails(value: any): void {
        this.$router.push('/product/linklist')
        bus.$emit('go', value)
    }

    private addProduct(value: string) {
        this.dialogFormVisible = true;
        this.productName = value;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-icon-circle-plus{
    font-size: 20px;
    float: right;
    margin-right: 18px;
    margin-top: 16px;
}
.el-icon-circle-plus:hover{
    color: brown
}
</style>
