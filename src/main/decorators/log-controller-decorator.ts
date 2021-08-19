import { ILogErrorRepository } from '@/data/protocols/db/log/log-error-repository'
import { THttpRequest, THttpResponse, IController } from '@/presentation/protocols'

export class LogControllerDecorator implements IController {
  constructor (
    private readonly controller: IController,
    private readonly logErrorRepository: ILogErrorRepository
  ) { }

  async handle (httpRequest: THttpRequest): Promise<THttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.logError((httpResponse.body).stack)
    }
    return httpResponse
  }
}
