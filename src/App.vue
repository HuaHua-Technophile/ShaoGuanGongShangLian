<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import router from '@/router'

// 定义过渡名称的响应式变量
const transitionName = ref('fade')

// 路由顺序定义
const routeOrder = ['intro', 'constitution', 'leadership', 'departments', 'members']

// 确定过渡方向的函数
const determineTransition = (toName: string, fromName: string): string => {
  if (!toName || !fromName) return 'fade'

  const toIndex = routeOrder.indexOf(toName)
  const fromIndex = routeOrder.indexOf(fromName)

  if (toIndex === -1 || fromIndex === -1) return 'fade'

  return toIndex > fromIndex ? 'slide-left' : 'slide-right'
}

// 设置导航守卫
let removeGuard: (() => void) | null = null

onMounted(() => {
  removeGuard = router.beforeEach((to, from, next) => {
    const toName = to.name?.toString() || ''
    const fromName = from.name?.toString() || ''
    transitionName.value = determineTransition(toName, fromName)
    next()
  })
})

onUnmounted(() => {
  if (removeGuard) {
    removeGuard()
  }
})
</script>

<template>
  <div class="min-vh-100 d-flex flex-column bg-light">
    <NavBar />
    <div class="flex-grow-1">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
// 淡入淡出效果
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// 向左滑动效果（向前导航）
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

// 向右滑动效果（向后导航）
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
