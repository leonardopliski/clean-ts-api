import { TSurveyResultModel } from '@/domain/models/survey-result'

export interface ILoadSurveyResultRepository {
  loadBySurveyId: (surveyId: string, accountId: string) => ILoadSurveyResultRepository.Result
}

export namespace ILoadSurveyResultRepository {
  export type Result = Promise<TSurveyResultModel>
}
