import router from '@/router'
import store from '@/store'
import modules from '@/modules'
import loadjs from 'loadjs'

const cache = new Set()

router.beforeEach((to, from, next) => {
  const [, name] = to.path.split('/')
  const module = modules[name]
  if (module) {
    if (!cache.has(name)) {
      loadjs(module, function () {
        const { routes, store: moduleStore = {} } = window[name]
        router.addRoutes(routes)
        moduleStore.namespaced = true
        store.registerModule(name, moduleStore)
        cache.add(name)
        next(to.path)
      })
      return
    }
  } 
  if (to.matched.length) {
    next()
  } else {
    next('/404')
  }
})
