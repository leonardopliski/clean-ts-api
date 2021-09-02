import { TSurveyResultModel } from '@/domain/models/survey-result'

export interface ILoadSurveyResultRepository {
  loadBySurveyId: (surveyId: string) => Promise<TSurveyResultModel>
}
