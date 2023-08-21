import { defineConfig } from 'vitepress'
import zhConfig from './locales/zh.config.js'
import enConfig from './locales/en.config.js'
export default defineConfig({
  base: '',
  title: "SGate",
  description: "Documents",
  head: [
    [
      'link',
      { rel: 'icon', href: '/images/logo.png' }
    ]
  ],
  lastUpdated: true,
  srcDir: './src',
  locales: {
    root: zhConfig,
    // en: enConfig,
  },
  themeConfig: {
    logo: '/images/logo.png',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/gccpay_sa?s=11&t=KMVEAew_1QAw4avapqdlhg' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/gccpay/' }
    ]
  },
  markdown: {
    // theme: 'github-dark-dimmed',
    lineNumbers: true
  }
})