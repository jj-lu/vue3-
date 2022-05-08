<template>
  <div>
    <div>
      <div class="logo-container">
        <el-avatar
          :size="logoHeight"
          shape="square"
          src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        ></el-avatar>
        <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
          JJ-admin {{ $t('msg.test') }}
        </h1>
      </div>
    </div>
    <el-scrollbar>
      <SidebarMenu></SidebarMenu>
    </el-scrollbar>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import SidebarMenu from './Sidebar/SidebarMenu.vue'

const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
