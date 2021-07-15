import { ILogErrorRepository } from '../../data/protocols/log-error-repository'
import { ServerError } from '../../presentation/errors'
import { IHttpRequest, IHttpResponse, IController } from '../../presentation/protocols'

export class LogControllerDecorator implements IController {
  private readonly controller: IController
  private readonly logErrorRepository: ILogErrorRepository

  constructor (controller: IController, logErrorRepository: ILogErrorRepository) {
    this.controller = controller
    this.logErrorRepository = logErrorRepository
  }

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.logError((httpResponse.body as ServerError).stack)
    }
    return httpResponse
  }
}
