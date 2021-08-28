import { TSurveyResultModel } from '@/domain/models/survey-result'
import { TSaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'

export const mockSaveSurveyResultParams = (): TSaveSurveyResultParams => ({
  surveyId: 'any_survey_id',
  accountId: 'any_account_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSurveyResultModel = (): TSurveyResultModel => Object.assign({}, mockSaveSurveyResultParams(), { id: 'any_id' })
