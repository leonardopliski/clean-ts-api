import { IController } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { LoadSurveysController } from '../../../../../presentation/controllers/survey/load-surveys/load-surveys-controller'
import { makeDbLoadSurveys } from '../../../usecases/survey/load-surveys/db-load-surveys-factory'

export const makeLoadSurveysControllerFactory = (): IController => {
  const dbLoadSurveys = makeDbLoadSurveys()
  const controller = new LoadSurveysController(dbLoadSurveys)
  return makeLogControllerDecorator(controller)
}
