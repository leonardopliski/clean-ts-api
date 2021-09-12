import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbLoadSurveyResult } from '@/main/factories/usecases/survey-result/load-survey-result'
import { makeDbCheckSurveyById } from '@/main/factories/usecases/survey'
import { LoadSurveyResultController } from '@/presentation/controllers/survey-result/load-survey-result'
import { IController } from '@/presentation/protocols'

export const makeLoadSurveyResultController = (): IController => {
  const controller = new LoadSurveyResultController(makeDbCheckSurveyById(), makeDbLoadSurveyResult())
  return makeLogControllerDecorator(controller)
}
