import { TSurveyModel } from '@/domain/models'

export interface ILoadSurveys {
  load: (accountId: string) => ILoadSurveys.Result
}

export namespace ILoadSurveys {
  export type Result = Promise<TSurveyModel[]>
}
