import { createRouter, createWebHistory } from 'vue-router'

// 简化的路由基础数据（按导航顺序定义）
const routeBasics = [
  { name: 'intro', title: '工商联简介' },
  { name: 'constitution', title: '工商联章程' },
  { name: 'leadership', title: '工商联领导' },
  { name: 'departments', title: '部门机构' },
  { name: 'members', title: '会员列表' },
]

// 生成完整路由配置
const routeConfig = routeBasics.map(({ name, title }) => ({
  path: `/${name}`,
  name,
  component: () => import(`@/views/${name.charAt(0).toUpperCase() + name.slice(1)}View.vue`),
  meta: { title },
}))

// 导出路由名称顺序数组，供其他组件使用
export const routeOrder = routeBasics.map((item) => item.name)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/intro',
    },
    ...routeConfig,
  ],
})

// 设置页面标题
router.beforeEach((to, _from, next) => {
  const title = to.meta.title ? `${to.meta.title} - 韶关市工商联` : '韶关市工商联'
  document.title = title as string
  next()
})

export default router
