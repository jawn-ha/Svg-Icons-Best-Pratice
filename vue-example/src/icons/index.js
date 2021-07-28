import Vue from 'vue'
import SvgIcon from '@/components/svg-icon.vue'

// 全局注册 svg-icon
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
console.log('requireAll(req)', requireAll(req))
requireAll(req)
