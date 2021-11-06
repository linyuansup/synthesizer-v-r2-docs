import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/linyuansup/code/synthesizer-v-r2-docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/linyuansup/code/synthesizer-v-r2-docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
