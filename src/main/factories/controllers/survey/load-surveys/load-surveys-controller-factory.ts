import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbLoadSurveys } from '@/main/factories/usecases/survey/load-surveys/db-load-surveys-factory'
import { IController } from '@/presentation/protocols'
import { LoadSurveysController } from '@/presentation/controllers/survey/load-surveys/load-surveys-controller'

export const makeLoadSurveysControllerFactory = (): IController => {
  const dbLoadSurveys = makeDbLoadSurveys()
  const controller = new LoadSurveysController(dbLoadSurveys)
  return makeLogControllerDecorator(controller)
}
