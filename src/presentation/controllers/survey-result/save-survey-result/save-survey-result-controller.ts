import { IController, THttpRequest, THttpResponse, ILoadSurveyById } from './save-survey-result-controller-protocols'

export class SaveSurveyResultController implements IController {
  constructor (private readonly loadSurveyById: ILoadSurveyById) {}

  async handle (httpRequest: THttpRequest): Promise<THttpResponse> {
    await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return null
  }
}
