import { IController, THttpRequest, THttpResponse, ILoadSurveyById } from './load-survey-result-controller-protocols'

export class LoadSurveyResultController implements IController {
  constructor (private readonly loadSurveyById: ILoadSurveyById) {}

  async handle (httpRequest: THttpRequest): Promise<THttpResponse> {
    await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return await Promise.resolve(null)
  }
}
