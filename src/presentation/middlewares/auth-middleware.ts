import { AccessDeniedError } from '../errors'
import { forbidden } from '../helpers'
import { IMiddleware, IHttpRequest, IHttpResponse } from '../protocols'

export class AuthMiddleware implements IMiddleware {
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = forbidden(new AccessDeniedError())
    return await new Promise(resolve => resolve(error))
  }
}
