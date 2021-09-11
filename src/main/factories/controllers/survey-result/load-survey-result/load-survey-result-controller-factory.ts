import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbLoadSurveyResult } from '@/main/factories/usecases/survey-result/load-survey-result'
import { makeDbLoadSurveyById } from '@/main/factories/usecases/survey/load-survey-by-id'
import { LoadSurveyResultController } from '@/presentation/controllers/survey-result/load-survey-result'
import { IController } from '@/presentation/protocols'

export const makeLoadSurveyResultController = (): IController => {
  const controller = new LoadSurveyResultController(makeDbLoadSurveyById(), makeDbLoadSurveyResult())
  return makeLogControllerDecorator(controller)
}
