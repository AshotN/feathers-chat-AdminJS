import { Koa } from '@feathersjs/koa'
import AdminJS from 'adminjs'
import { UserResource } from './Resources/Users'
import AdminJSKoa from '@adminjs/koa'
import { Database, Resource } from 'adminjs-feathers'

AdminJS.registerAdapter({ Database, Resource })

export const startAdminJS = async () => {
  const app = new Koa()
  const admin = new AdminJS({
    resources: [UserResource],
    rootPath: '/admin'
  })

  const router = AdminJSKoa.buildRouter(admin, app)

  app.use(router.routes()).use(router.allowedMethods())

  app.listen(3000, () => {
    console.log(`AdminJS available at http://localhost:3000${admin.options.rootPath}`)
  })
}
