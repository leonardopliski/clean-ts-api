import { IController, THttpResponse, IValidation, IAddSurvey } from './add-survey-controller-protocols'
import { badRequest, noContent, serverError } from '@/presentation/helpers'

export class AddSurveyController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly addSurvey: IAddSurvey
  ) {}

  async handle (request: AddSurveyController.Request): Promise<THttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const { question, answers } = request
      await this.addSurvey.add({
        question,
        answers,
        date: new Date()
      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddSurveyController {
  export type Request = {
    question: string
    answers: Answer[]
  }

  export type Answer = {
    image?: string
    answer: string
  }
}
