import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbSaveSurveyResult } from '@/main/factories/usecases/survey-result/save-survey-result/db-save-survey-result-factory'
import { makeDbLoadSurveyById } from '@/main/factories/usecases/survey/load-survey-by-id/db-load-survey-by-id-factory'
import { SaveSurveyResultController } from '@/presentation/controllers/survey-result/save-survey-result/save-survey-result-controller'
import { IController } from '@/presentation/protocols'

export const makeSaveSurveyResultController = (): IController => {
  const dbSaveSurveyResult = makeDbSaveSurveyResult()
  const dbLoadSurveyById = makeDbLoadSurveyById()
  const controller = new SaveSurveyResultController(dbLoadSurveyById, dbSaveSurveyResult)
  return makeLogControllerDecorator(controller)
}
