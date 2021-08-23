import { IController, THttpRequest, THttpResponse, ILoadSurveyById } from './save-survey-result-controller-protocols'
import { forbidden } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'

export class SaveSurveyResultController implements IController {
  constructor (private readonly loadSurveyById: ILoadSurveyById) {}

  async handle (httpRequest: THttpRequest): Promise<THttpResponse> {
    const survey = await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    if (!survey) {
      return forbidden(new InvalidParamError('surveyId'))
    }
    return null
  }
}
