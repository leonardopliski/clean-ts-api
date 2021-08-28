import { loginPath } from './paths'
import { accountSchema, loginParamsSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'Clean Node API to create surveys among programmers',
    version: '2.2.0'
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
    loginParams: loginParamsSchema
  },
  paths: {
    '/login': loginPath
  }
}
