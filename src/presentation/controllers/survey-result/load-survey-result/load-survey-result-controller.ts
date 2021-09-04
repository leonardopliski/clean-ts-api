import { ILoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, serverError } from '@/presentation/helpers'
import { IController, THttpRequest, THttpResponse, ILoadSurveyById } from './load-survey-result-controller-protocols'

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
      await this.loadSurveyResult.load(surveyId)
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
