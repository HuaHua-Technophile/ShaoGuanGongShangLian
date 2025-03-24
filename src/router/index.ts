import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/intro',
    },
    {
      path: '/intro',
      name: 'intro',
      component: () => import('@/views/IntroView.vue'),
      meta: {
        title: '工商联简介',
      },
    },
    {
      path: '/constitution',
      name: 'constitution',
      component: () => import('@/views/ConstitutionView.vue'),
      meta: {
        title: '工商联章程',
      },
    },
    {
      path: '/leadership',
      name: 'leadership',
      component: () => import('@/views/LeadershipView.vue'),
      meta: {
        title: '工商联领导',
      },
    },
    {
      path: '/departments',
      name: 'departments',
      component: () => import('@/views/DepartmentsView.vue'),
      meta: {
        title: '部门机构',
      },
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('@/views/MembersView.vue'),
      meta: {
        title: '会员列表',
      },
    },
  ],
})

// 设置页面标题
router.beforeEach((to, from, next) => {
  const title = to.meta.title ? `${to.meta.title} - 韶关市工商联` : '韶关市工商联'
  document.title = title as string
  next()
})

export default router
