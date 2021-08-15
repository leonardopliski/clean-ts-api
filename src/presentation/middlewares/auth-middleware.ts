import { ILoadAccountByToken } from '../../domain/usecases/load-account-by-token'
import { IMiddleware, IHttpRequest, IHttpResponse } from './auth-middleware-protocols'
import { forbidden, ok, serverError } from '../helpers'
import { AccessDeniedError } from '../errors'

export class AuthMiddleware implements IMiddleware {
  constructor (
    private readonly loadAccountByToken: ILoadAccountByToken,
    private readonly role?: string
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken, this.role)
        if (account) {
          return ok({
            accountId: account.id
          })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}
