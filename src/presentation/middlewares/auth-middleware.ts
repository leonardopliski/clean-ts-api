import { ILoadAccountByToken } from '../../domain/usecases/load-account-by-token'
import { AccessDeniedError } from '../errors'
import { forbidden, ok } from '../helpers'
import { IMiddleware, IHttpRequest, IHttpResponse } from '../protocols'

export class AuthMiddleware implements IMiddleware {
  constructor (
    private readonly loadAccountByToken: ILoadAccountByToken
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']
    if (accessToken) {
      const account = await this.loadAccountByToken.load(accessToken)
      if (account) {
        return ok({
          accountId: account.id
        })
      }
    }
    return forbidden(new AccessDeniedError())
  }
}
