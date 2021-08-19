import { THttpRequest, THttpResponse } from './http'

export interface IMiddleware {
  handle: (httpRequest: THttpRequest) => Promise<THttpResponse>
}
