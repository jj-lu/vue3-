<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    router
    :collapse="!$store.getters.sidebarOpened"
    :uniqueOpened="true"
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
  >
    <SidebarItem
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></SidebarItem>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '../../../utils/router'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  console.log(filterRoutes)
  console.log(generateMenus(filterRoutes))

  // return filterRoutes
  return generateMenus(filterRoutes)
})
console.log(router.getRoutes())

const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
