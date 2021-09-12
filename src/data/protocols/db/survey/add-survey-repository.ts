import { IAddSurvey } from '@/domain/usecases'

export interface IAddSurveyRepository {
  add: (data: IAddSurveyRepository.Params) => Promise<IAddSurveyRepository.Result>
}

export namespace IAddSurveyRepository {
  export type Params = IAddSurvey.Params

  export type Result = void
}
