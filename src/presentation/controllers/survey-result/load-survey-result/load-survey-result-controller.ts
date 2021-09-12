import { IController, THttpResponse, ICheckSurveyById } from './load-survey-result-controller-protocols'
import { ILoadSurveyResult } from '@/domain/usecases/survey-result'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, ok, serverError } from '@/presentation/helpers'

export class LoadSurveyResultController implements IController {
  constructor (
    private readonly checkSurveyById: ICheckSurveyById,
    private readonly loadSurveyResult: ILoadSurveyResult
  ) {}

  async handle (request: LoadSurveyResultController.Request): Promise<THttpResponse> {
    try {
      const surveyId = request.surveyId
      const exists = await this.checkSurveyById.checkById(surveyId)
      if (!exists) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      const surveyResult = await this.loadSurveyResult.load(surveyId, request.accountId)
      return ok(surveyResult)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadSurveyResultController {
  export type Request = {
    surveyId: string
    accountId: string
  }
}
