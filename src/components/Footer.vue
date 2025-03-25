<script setup lang="ts">
// 导入设备状态管理
import { useDeviceStore } from '@/stores/device'
import { computed } from 'vue'

const deviceStore = useDeviceStore()
const backgroundSize = computed(() => (deviceStore.isMobile ? '200% auto' : '30% auto'))
const backgroundPosition = computed(() => (deviceStore.isMobile ? 'center 31%' : 'center 40%'))
</script>

<template>
  <footer
    class="bg-primary text-white py-2 py-md-4 position-relative"
    style="box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5)"
  >
    <!-- 添加城市剪影背景 -->
    <div
      class="position-absolute top-0 w-100 h-100 footer-bg"
      :style="{ backgroundSize, backgroundPosition }"
    ></div>

    <div class="container position-relative" style="z-index: 2">
      <div class="row align-items-center">
        <!-- 左侧徽标 -->
        <div class="col-md-3 text-center text-md-start mb-3 mb-md-0">
          <img
            src="@/assets/images/党政机关.webp"
            alt="徽标"
            class="img-fluid"
            style="max-height: 70px"
          />
        </div>

        <!-- 中间信息 -->
        <div class="col-md-6 text-center mb-3 mb-md-0">
          <div class="mb-1 fs-8 fs-md-6">版权所有：韶关市工商联</div>
          <div class="mb-1 fs-8 fs-md-6">地址：韶关市XXXXXXX</div>
          <div class="mb-1 fs-8 fs-md-6">备案号码：粤ICP备88888888号-1</div>
          <div class="fs-8 fs-md-6">网站建设：辰星信息技术有限公司</div>
        </div>

        <!-- 右侧二维码 -->
        <div class="col-md-3 text-center text-md-end">
          <img
            src="@/assets/images/footer-QRcode.png"
            alt="二维码"
            class="img-fluid"
            style="max-height: 80px"
          />
          <div class="mt-1 small fs-9 fs-md-8">扫码关注韶关市工商联</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-bg {
  background: url('@/assets/images/footer-city.svg');
  opacity: 0.2;
}
</style>
