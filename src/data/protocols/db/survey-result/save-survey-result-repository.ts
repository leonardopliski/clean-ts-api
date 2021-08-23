import { TSaveSurveyResultModel } from '@/domain/usecases/survey-result/save-survey-result'
import { TSurveyResultModel } from '@/domain/models/survey-result'

export interface ISaveSurveyResultRepository {
  save: (data: TSaveSurveyResultModel) => Promise<TSurveyResultModel>
}
