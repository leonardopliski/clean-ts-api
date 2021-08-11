import { IAddSurvey } from '../../../../domain/usecases/add-survey'
import { badRequest, noContent, serverError } from '../../../helpers'
import { IValidation } from '../../../protocols'
import { IController, IHttpRequest, IHttpResponse } from './add-survey-controller-protocols'

export class AddSurveyController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly addSurvey: IAddSurvey
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { question, answers } = httpRequest.body
      await this.addSurvey.add({
        question,
        answers
      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
