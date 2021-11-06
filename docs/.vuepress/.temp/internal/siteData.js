export const siteData = {
  "base": "/synthesizer-v-r2-docs/",
  "lang": "en-US",
  "title": "Synthesizer-V-R2-User-Manual",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/sv.ico"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "Synthesizer V R2 User Manual",
      "description": "非官方的 Synthesizer V 用户手册"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
