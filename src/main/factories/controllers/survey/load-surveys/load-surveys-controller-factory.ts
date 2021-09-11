import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbLoadSurveys } from '@/main/factories/usecases/survey/load-surveys'
import { IController } from '@/presentation/protocols'
import { LoadSurveysController } from '@/presentation/controllers/survey/load-surveys'

export const makeLoadSurveysControllerFactory = (): IController => {
  const dbLoadSurveys = makeDbLoadSurveys()
  const controller = new LoadSurveysController(dbLoadSurveys)
  return makeLogControllerDecorator(controller)
}
