import { TSurveyModel } from '@/domain/models/survey'

export interface IAddSurvey {
  add: (data: IAddSurvey.Params) => Promise<IAddSurvey.Result>
}

export namespace IAddSurvey {
  export type Params = Omit<TSurveyModel, 'id'>

  export type Result = void
}
