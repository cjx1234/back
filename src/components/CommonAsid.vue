<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
  <h3>{{isCollapse ? '后台' : '后台管理系统'}}</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.path" :index="item.name">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu @click="clickMenu(item)"  v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group @click="clickMenu(subitem)" v-for="subitem in item.children" :key="subitem.path" >       
        <el-menu-item  @click="clickMenu(subitem)" :index="subitem.path">{{subitem.label}}</el-menu-item>        
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
    height: 100vh;
    h3{
        color: #fff;
        text-align: center;
        line-height: 18px;
        font-size: 16px;
        font-weight: 400px;
        margin: 15px 0 10px 0;
    }
}
</style>

<script>
// import { it } from 'node:test';

import Cookie from 'js-cookie';

export default {
  data() {
    return {
      // isCollapse: false,
      
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    clickMenu(item){
      //单击的路由和跳转不一致才允许
      if(this.$route.path!==item.path && !(this.$route.path === '/home' && (item.path === '/'))){
        this.$router.push(item.path)
      }
      this.$store.commit('selectMenu',item)
    }
  },
  computed:{
    noChildren(){
        return this.menuData.filter(item=>!item.children)
    },
    hasChildren(){
        return this.menuData.filter(item=>item.children)
    },
    isCollapse(){
        return this.$store.state.tab.isCollapse
    },
    menuData(){
        return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu 
    }
  }
};
</script>
<style>
.el-menu{
  border: 0px;
}
</style>
