import { ResourceWithOptions } from 'adminjs'
import { userSchema } from '../services/users/users.schema'
import { app } from '../app'

export const UserResource: ResourceWithOptions = {
  resource: { service: app.service('users'), schema: userSchema },

  options: {}
}
