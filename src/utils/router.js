import path from 'path'

const getChildRenRoutes = routes => {
  const result = []
  routes.forEach(route => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

export const filterRouters = routes => {
  const childrenRoutes = getChildRenRoutes(routes)
  return routes.filter(route => {
    return !childrenRoutes.find(childrenRoute => {
      return childrenRoute.path === route.path
    })
  })
}

function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

export function generateMenus(routes, basePath = '') {
  const result = []
  routes.forEach(item => {
    if (isNull(item.meta) && isNull(item.children)) return
    if (isNull(item.meta) && isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    const routePath = path.resolve(basePath, item.path)
    let route = result.find(item => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }

    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}
