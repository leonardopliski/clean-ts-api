import { TSurveyModel } from '@/domain/models/survey'

export type TAddSurveyModel = Omit<TSurveyModel, 'id'>

export interface IAddSurvey {
  add: (data: TAddSurveyModel) => Promise<void>
}
