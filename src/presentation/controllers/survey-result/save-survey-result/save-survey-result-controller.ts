import { IController, THttpRequest, THttpResponse, ILoadSurveyById, ISaveSurveyResult } from './save-survey-result-controller-protocols'
import { forbidden, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'

export class SaveSurveyResultController implements IController {
  constructor (
    private readonly loadSurveyById: ILoadSurveyById,
    private readonly saveSurveyResult: ISaveSurveyResult
  ) {}

  async handle (httpRequest: THttpRequest): Promise<THttpResponse> {
    try {
      const { surveyId } = httpRequest.params
      const { answer } = httpRequest.body
      const { accountId } = httpRequest
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (survey) {
        const answers = survey.answers.map(a => a.answer)
        if (!answers.includes(answer)) {
          return forbidden(new InvalidParamError('answer'))
        }
        await this.saveSurveyResult.save({
          accountId,
          surveyId,
          answer,
          date: new Date()
        })
      } else {
        return forbidden(new InvalidParamError('surveyId'))
      }
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
