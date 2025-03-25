<script setup lang="ts">
import { RouterLink } from 'vue-router'
import navbarBgImage from '@/assets/images/navbar1.jpeg'
import { ref, computed } from 'vue'
import { useDeviceStore } from '@/stores/device'

const deviceStore = useDeviceStore()
const isMenuOpen = ref(false) // 控制菜单是否展开

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header
    class="w-100 position-relative bgimg-center-cover"
    style="box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5)"
    :style="{ background: `url(${navbarBgImage})` }"
  >
    <!-- 添加白色遮罩层 -->
    <div class="position-absolute w-100 h-100 bg-white bg-opacity-25" style="z-index: 1"></div>
    <div class="position-relative" style="z-index: 2">
      <div class="container py-2 position-relative">
        <!-- 头部内容改为响应式布局 -->
        <div class="row align-items-center">
          <!-- 标题 -->
          <RouterLink
            to="/"
            class="col-12 col-md-6 py-2 text-decoration-none text-white"
            style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8)"
          >
            <h1 class="m-0 fs-3 fs-md-1 fw-bold" style="letter-spacing: 0.19em">韶关市工商联</h1>
            <p class="m-0 fs-md-4" style="letter-spacing: 0.35em">SHAOGUAN FIC</p>
          </RouterLink>
          <!-- 搜索框 -->
          <div class="col-12 col-md-6 py-2 d-flex justify-content-md-end">
            <div
              class="input-group"
              :class="[{ 'input-group-sm': deviceStore.isMobile }]"
              :style="{ maxWidth: deviceStore.isMobile ? '200px' : '270px' }"
            >
              <input
                type="text"
                placeholder="请输入关键字"
                class="form-control rounded-start bg-white bg-opacity-75 border-light"
              />
              <button class="btn btn-primary rounded-end bg-primary bg-opacity-75">搜索</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 移动端右上角菜单按钮 -->
      <div
        class="position-absolute top-0 end-0 me-2 transition-750"
        :class="{ 'rotate-180': isMenuOpen }"
        style="transform: rotate(0deg)"
        v-if="deviceStore.isMobile"
      >
        <i
          class="bi bi-list fs-2 text-white cursor-pointer"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 1)"
          @click="toggleMenu"
        ></i>
      </div>
      <!-- 导航按钮 -->
      <div
        class="bg-opacity-75 overflow-hidden transition-1000"
        :class="{
          'bg-primary': !deviceStore.isMobile,
          'nav-menu-mobile': deviceStore.isMobile,
          'nav-menu-collapsed': deviceStore.isMobile && !isMenuOpen,
        }"
        style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); max-height: 999px"
      >
        <div class="container">
          <div class="row g-0" :class="{ 'flex-column': deviceStore.isMobile }">
            <RouterLink
              to="/intro"
              class="col-md text-white py-2 py-md-3 text-decoration-none text-center nav-link"
              >工商联简介</RouterLink
            >
            <RouterLink
              to="/constitution"
              class="col-md text-white py-2 py-md-3 text-decoration-none text-center nav-link"
              >工商联章程</RouterLink
            >
            <RouterLink
              to="/leadership"
              class="col-md text-white py-2 py-md-3 text-decoration-none text-center nav-link"
              >工商联领导</RouterLink
            >
            <RouterLink
              to="/departments"
              class="col-md text-white py-2 py-md-3 text-decoration-none text-center nav-link"
              >部门机构</RouterLink
            >
            <RouterLink
              to="/members"
              class="col-md text-white py-2 py-md-3 text-decoration-none text-center nav-link"
              >会员列表</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.nav-link:hover,
.router-link-active {
  background-color: rgba(0, 0, 0, 0.4);
}

.nav-menu-mobile .nav-link:hover,
.nav-menu-mobile .router-link-active {
  background: linear-gradient(
    to right,
    transparent,
    rgba(var(--bs-primary-rgb), 0.7) 20%,
    rgba(var(--bs-primary-rgb), 0.7) 80%,
    transparent
  );
}

.rotate-180 {
  transform: rotate(180deg) !important;
}

.nav-menu-collapsed {
  max-height: 0 !important;
}
</style>
