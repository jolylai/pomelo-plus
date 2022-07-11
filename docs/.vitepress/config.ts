import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pomelo Plus',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/getting-started',
        activeMatch: '^/guide/',
      },
      {
        text: '组件',
        link: '/components/button/',
        activeMatch: '^/components/',
      },
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/components/': getComponentsSidebar(),
    },
  },
})

function getGuideSidebar() {
  return [
    // { text: '快速开始', link: '/guide/getting-started' },
    {
      text: '通用组件',
      items: [
        { text: '快速开始', link: '/guide/getting-started' },
        { text: '主题', link: '/guide/theme' },
      ],
    },
  ]
}

function getComponentsSidebar() {
  return [
    {
      text: '通用组件',
      items: [{ text: 'Button 按钮', link: '/components/button/' }],
    },
    {
      text: '布局',
      items: [{ text: 'Space 间距', link: '/components/space/' }],
    },
    {
      text: '数据录入',
      items: [
        { text: 'Checkbox 多选框', link: '/components/checkbox/' },
        { text: 'Upload 上传', link: '/components/upload/' },
      ],
    },
    {
      text: '数据展示',
      items: [
        { text: 'Avatar 头像', link: '/components/avatar/' },
        { text: 'Table', link: '/components/table/' },
        { text: 'Popper', link: '/components/popper/' },
        { text: 'Tooltip', link: '/components/tooltip/' },
      ],
    },
  ]
}
