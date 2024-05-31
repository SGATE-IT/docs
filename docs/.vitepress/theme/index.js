import DefaultTheme from 'vitepress/theme'
import './css/custom.css'
import homeBackground from './layout/homeBackground.vue'

export default {
    extends: DefaultTheme,
    Layout: homeBackground
}