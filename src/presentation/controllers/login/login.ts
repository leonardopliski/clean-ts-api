import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'

export class LoginController implements IController {
  async handle (_httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return await new Promise((resolve) => resolve(badRequest(new MissingParamError('email'))))
  }
}
