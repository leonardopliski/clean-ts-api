import { TSurveyResultModel } from '@/domain/models/survey-result'
import { TSaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'

export const mockSaveSurveyResultParams = (): TSaveSurveyResultParams => ({
  surveyId: 'any_id',
  accountId: 'any_account_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSurveyResultModel = (): TSurveyResultModel => ({
  surveyId: 'any_id',
  question: 'any_question',
  answers: [
    {
      answer: 'any_answer',
      count: 0,
      percent: 0
    },
    {
      answer: 'other_answer',
      image: 'any_image',
      count: 0,
      percent: 0
    }
  ],
  date: new Date()
})
