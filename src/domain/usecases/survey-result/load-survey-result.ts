import { TSurveyResultModel } from '@/domain/models/survey-result'

export interface ILoadSurveyResult {
  load: (surveyId: string, accountId: string) => ILoadSurveyResult.Result
}

export namespace ILoadSurveyResult {
  export type Result = Promise<TSurveyResultModel>
}
