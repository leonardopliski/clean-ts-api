import { TSurveyModel } from '@/domain/models/survey'

export type TAddSurveyParams = Omit<TSurveyModel, 'id'>

export interface IAddSurvey {
  add: (data: TAddSurveyParams) => Promise<void>
}
