<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="w-100 position-relative">
    <!-- 上部分：背景图片区域 -->
    <div
      class="position-relative bgimg-center-cover"
      style="background: url('/src/assets/images/navbar1.jpeg')"
    >
      <!-- 添加白色遮罩层 -->
      <div class="position-absolute w-100 h-100 bg-white bg-opacity-25"></div>
      <div
        class="container py-2 d-flex justify-content-between align-items-center position-relative"
      >
        <!-- 左侧标题 -->
        <div class="py-3">
          <RouterLink
            to="/"
            class="text-decoration-none"
            style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8)"
          >
            <h1 class="text-white m-0 fs-1 fw-bold">韶关市工商联</h1>
            <p
              class="text-white m-0 fs-4"
              style="letter-spacing: 0.15em; text-align: justify; text-align-last: justify"
            >
              SHAOGUAN FIC
            </p>
          </RouterLink>
        </div>

        <!-- 右侧搜索框 -->
        <div class="d-flex">
          <input
            type="text"
            placeholder="请输入关键字"
            class="form-control rounded-0 rounded-start bg-white bg-opacity-75 border-light"
          />
          <button class="btn btn-primary rounded-0 rounded-end">搜索</button>
        </div>
      </div>
    </div>

    <!-- 下部分：导航按钮 -->
    <div class="bg-primary">
      <div class="container">
        <nav class="d-flex justify-content-between">
          <RouterLink
            to="/intro"
            class="text-white px-4 py-3 text-decoration-none text-center flex-grow-1 nav-link"
            >工商联简介</RouterLink
          >
          <RouterLink
            to="/constitution"
            class="text-white px-4 py-3 text-decoration-none text-center flex-grow-1 nav-link"
            >工商联章程</RouterLink
          >
          <RouterLink
            to="/leadership"
            class="text-white px-4 py-3 text-decoration-none text-center flex-grow-1 nav-link"
            >工商联领导</RouterLink
          >
          <RouterLink
            to="/departments"
            class="text-white px-4 py-3 text-decoration-none text-center flex-grow-1 nav-link"
            >部门机构</RouterLink
          >
          <RouterLink
            to="/members"
            class="text-white px-4 py-3 text-decoration-none text-center flex-grow-1 nav-link"
            >会员列表</RouterLink
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.nav-link:hover,
.router-link-active {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
