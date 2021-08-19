import { IController, IHttpRequest, IHttpResponse } from './load-surveys-controller-protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { ILoadSurveys } from '@/domain/usecases/load-surveys'

export class LoadSurveysController implements IController {
  constructor (private readonly loadSurveys: ILoadSurveys) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const surveys = await this.loadSurveys.load()
      if (surveys.length) {
        return ok(surveys)
      }
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
