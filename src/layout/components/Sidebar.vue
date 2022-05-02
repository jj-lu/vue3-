<template>
  <div>
    <h1>侧边栏</h1>
    <el-scrollbar>
      <SidebarMenu></SidebarMenu>
    </el-scrollbar>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import SidebarMenu from './Sidebar/SidebarMenu.vue'
</script>

<style lang="less" scoped></style>
