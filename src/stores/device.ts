import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDeviceStore = defineStore('device', () => {
  // 移动设备状态
  const isMobile = ref(false)

  // 检测设备类型
  const detectDevice = () => {
    // 使用媒体查询判断设备类型
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    isMobile.value = mediaQuery.matches

    // 添加监听器，处理窗口大小变化
    const handleResize = (e: MediaQueryListEvent) => {
      isMobile.value = e.matches
    }

    mediaQuery.addEventListener('change', handleResize)
  }

  return {
    isMobile,
    detectDevice,
  }
})
