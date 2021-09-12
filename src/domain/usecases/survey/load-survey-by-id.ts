import { TSurveyModel } from '@/domain/models/survey'

export interface ILoadSurveyById {
  loadById: (id: string) => Promise<ILoadSurveyById.Result>
}

export namespace ILoadSurveyById {
  export type Result = TSurveyModel
}
