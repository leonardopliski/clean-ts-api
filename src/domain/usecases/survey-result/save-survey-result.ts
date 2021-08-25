import { TSurveyResultModel } from '@/domain/models/survey-result'

export type TSaveSurveyResultParams = Omit<TSurveyResultModel, 'id'>

export interface ISaveSurveyResult {
  save: (data: TSaveSurveyResultParams) => Promise<TSurveyResultModel>
}
