import { TSurveyResultModel } from '@/domain/models/survey-result'

export interface ILoadSurveyResult {
  load: (surveyId: string) => Promise<TSurveyResultModel>
}
