import { TSaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'

export interface ISaveSurveyResultRepository {
  save: (data: TSaveSurveyResultParams) => Promise<void>
}
