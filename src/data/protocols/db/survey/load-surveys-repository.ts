import { TSurveyModel } from '@/domain/models/survey'

export interface ILoadSurveysRepository {
  loadAll: (accountId: string) => ILoadSurveysRepository.Result
}

export namespace ILoadSurveysRepository {
  export type Result = Promise<TSurveyModel[]>
}
