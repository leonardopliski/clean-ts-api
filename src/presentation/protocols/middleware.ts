import { THttpResponse } from './http'

export interface IMiddleware<T = any> {
  handle: (httpRequest: T) => Promise<THttpResponse>
}
