import { ServerError, UnauthorizedError } from '@/presentation/errors'
import { THttpResponse } from '@/presentation/protocols/http'

export const badRequest = (error: Error): THttpResponse => (
  { statusCode: 400, body: error }
)

export const forbidden = (error: Error): THttpResponse => (
  { statusCode: 403, body: error }
)

export const unauthorized = (): THttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (error: Error): THttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): THttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): THttpResponse => ({
  statusCode: 204,
  body: null
})
