import { THttpRequest, THttpResponse } from './http'

export interface IController {
  handle: (httpRequest: THttpRequest) => Promise<THttpResponse>
}
