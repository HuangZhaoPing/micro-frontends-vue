import package_ from '@root/package'

const name = package_.name

export default [{
  path: `/${name}`,
  name: name,
  component: () => import('@/App')
}]
