import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbSaveSurveyResult } from '@/main/factories/usecases/survey-result/save-survey-result'
import { makeDbLoadAnswersBySurvey } from '@/main/factories/usecases/survey/load-answers-by-survey'
import { SaveSurveyResultController } from '@/presentation/controllers/survey-result/save-survey-result'
import { IController } from '@/presentation/protocols'

export const makeSaveSurveyResultController = (): IController => {
  const dbSaveSurveyResult = makeDbSaveSurveyResult()
  const dbLoadAnswersBySurvey = makeDbLoadAnswersBySurvey()
  const controller = new SaveSurveyResultController(dbLoadAnswersBySurvey, dbSaveSurveyResult)
  return makeLogControllerDecorator(controller)
}
