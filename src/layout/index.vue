<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <Sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></Sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <Navbar></Navbar>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import AppMain from './components/AppMain.vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import variables from '../style/variables.scss'
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';
@import '../style/variables.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}
.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
