import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbSaveSurveyResult } from '@/main/factories/usecases/survey-result/save-survey-result'
import { makeDbLoadSurveyById } from '@/main/factories/usecases/survey/load-survey-by-id'
import { SaveSurveyResultController } from '@/presentation/controllers/survey-result/save-survey-result'
import { IController } from '@/presentation/protocols'

export const makeSaveSurveyResultController = (): IController => {
  const dbSaveSurveyResult = makeDbSaveSurveyResult()
  const dbLoadSurveyById = makeDbLoadSurveyById()
  const controller = new SaveSurveyResultController(dbLoadSurveyById, dbSaveSurveyResult)
  return makeLogControllerDecorator(controller)
}
