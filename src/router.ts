import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  // mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/product/linklist"
    },
    {
      path: "/404",
      name : "404",
      component: resolve => require(["./views/404/404.vue"], resolve),
    },
    {
      path: "/",
      component: resolve => require(["./views/Home.vue"], resolve),
      children : [
        {
          path: "/product",
          name : "product",
          component: resolve => require(["./views/product/Product.vue"], resolve),
          meta: { 
            title: "业务线",
            keepAlive: false
           },
          children : [
            {
              path: "/product/linklist",
              component: resolve => require(["./views/product/InterfaceList.vue"], resolve),
              name : "linklist",
              meta: { title: "业务线" },
            },
            {
              path: "/product/linkdetails",
              name : "linkdetails",
              component: resolve => require(["./views/product/InterfaceDetails.vue"], resolve),
              meta: { title: "业务线" },
            }
          ] 
        },
        {
          path: "/api",
          name : "api",
          component: resolve => require(["./views/Apimeta/Apimeta.vue"], resolve),
          meta: { 
            title: "添加接口" ,
            keepAlive: true
          } 
        },
        {
          path: "/expecttion",
          name : "expecttion",
          component: resolve => require(["./views/Expecttation/Expecttation.vue"], resolve),
          meta: { 
            title: "在线编辑期望",
            keepAlive: true 
          } 
        },
        {
          path: "/mockLog",
          name : "mockLog",
          component: resolve => require(["./views/MockLog/MockLog.vue"], resolve),
          meta: { 
            title: "调用日志",
            keepAlive: false 
          } 
        },
        {
          path: "/domainip",
          name : "domainip",
          component: resolve => require(["./views/Domainip/Domainip.vue"], resolve),
          meta: { 
            title: "透传维护",
            keepAlive: false 
          } 
        },
      ]
    },
    {
      path: "*",
      redirect: "/404"
    }
  ],
});
