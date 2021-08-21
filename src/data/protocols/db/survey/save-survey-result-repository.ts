import { TSaveSurveyResultModel } from '@/domain/usecases/save-survey-result'
import { TSurveyResultModel } from '@/domain/models/survey-result'

export interface ISaveSurveyResultRepository {
  save: (data: TSaveSurveyResultModel) => Promise<TSurveyResultModel>
}
