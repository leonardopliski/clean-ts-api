import { IController, THttpRequest, THttpResponse } from './load-surveys-controller-protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { ILoadSurveys } from '@/domain/usecases/survey'

export class LoadSurveysController implements IController {
  constructor (private readonly loadSurveys: ILoadSurveys) {}

  async handle (httpRequest: THttpRequest): Promise<THttpResponse> {
    try {
      const surveys = await this.loadSurveys.load(httpRequest.accountId)
      if (surveys.length) {
        return ok(surveys)
      }
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
