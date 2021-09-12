import { TSurveyResultModel } from '@/domain/models/survey-result'

export interface ISaveSurveyResult {
  save: (data: ISaveSurveyResult.Params) => ISaveSurveyResult.Result
}

export namespace ISaveSurveyResult {
  export type Params = {
    surveyId: string
    accountId: string
    answer: string
    date: Date
  }

  export type Result = Promise<TSurveyResultModel>
}
