import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-0d372b5f","/dev/waiting.html","",["/dev/waiting","/dev/waiting.md"]],
  ["v-025e172f","/part1/1.1.html","",["/part1/1.1","/part1/1.1.md"]],
  ["v-0412efce","/part1/1.2.html","",["/part1/1.2","/part1/1.2.md"]],
  ["v-5e88b52d","/part2/2.1.html","",["/part2/2.1","/part2/2.1.md"]],
  ["v-603d8dcc","/part2/2.2.html","",["/part2/2.2","/part2/2.2.md"]],
  ["v-61f2666b","/part2/2.3.html","",["/part2/2.3","/part2/2.3.md"]],
  ["v-63a73f0a","/part2/2.4.html","",["/part2/2.4","/part2/2.4.md"]],
  ["v-655c17a9","/part2/2.5.html","",["/part2/2.5","/part2/2.5.md"]],
  ["v-6710f048","/part2/2.6.html","",["/part2/2.6","/part2/2.6.md"]],
  ["v-68c5c8e7","/part2/2.7.html","",["/part2/2.7","/part2/2.7.md"]],
  ["v-6a7aa186","/part2/2.8.html","",["/part2/2.8","/part2/2.8.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
