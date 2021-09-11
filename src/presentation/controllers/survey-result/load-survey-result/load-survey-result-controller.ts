import { IController, THttpRequest, THttpResponse, ILoadSurveyById } from './load-survey-result-controller-protocols'
import { ILoadSurveyResult } from '@/domain/usecases/survey-result'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, ok, serverError } from '@/presentation/helpers'

export class LoadSurveyResultController implements IController {
  constructor (
    private readonly loadSurveyById: ILoadSurveyById,
    private readonly loadSurveyResult: ILoadSurveyResult
  ) {}

  async handle (httpRequest: THttpRequest): Promise<THttpResponse> {
    try {
      const surveyId = httpRequest.params.surveyId
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      const surveyResult = await this.loadSurveyResult.load(surveyId, httpRequest.accountId)
      return ok(surveyResult)
    } catch (error) {
      return serverError(error)
    }
  }
}
