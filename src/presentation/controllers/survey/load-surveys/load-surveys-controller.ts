import { IController, THttpResponse } from './load-surveys-controller-protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { ILoadSurveys } from '@/domain/usecases/survey'

export class LoadSurveysController implements IController {
  constructor (private readonly loadSurveys: ILoadSurveys) {}

  async handle (request: LoadSurveysController.Request): Promise<THttpResponse> {
    try {
      const surveys = await this.loadSurveys.load(request.accountId)
      if (surveys.length) {
        return ok(surveys)
      }
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadSurveysController {
  export type Request = {
    accountId: string
  }
}
