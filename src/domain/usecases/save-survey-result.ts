import { TSurveyResultModel } from '@/domain/models/survey-result'

export type TSaveSurveyResultModel = Omit<TSurveyResultModel, 'id'>

export interface ISaveSurveyResult {
  save: (data: TSaveSurveyResultModel) => Promise<TSurveyResultModel>
}
