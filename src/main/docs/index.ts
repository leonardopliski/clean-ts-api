import { loginPath } from './paths'
import { accountSchema, errorSchema, loginParamsSchema } from './schemas'
import { badRequest, serverError, unauthorized, notFound } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'Clean Node API to create surveys among programmers',
    version: '2.2.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  tags: [
    {
      name: 'Login'
    }
  ],
  servers: [
    {
      url: '/api'
    }
  ],
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  paths: {
    '/login': loginPath
  },
  components: {
    badRequest,
    serverError,
    unauthorized,
    notFound
  }
}
