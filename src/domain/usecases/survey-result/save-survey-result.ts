import { TSurveyResultModel } from '@/domain/models/survey-result'

export type TSaveSurveyResultParams = {
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export interface ISaveSurveyResult {
  save: (data: TSaveSurveyResultParams) => Promise<TSurveyResultModel>
}
