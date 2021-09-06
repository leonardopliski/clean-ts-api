import { TAddSurveyParams } from '@/domain/usecases/survey/add-survey'

export interface IAddSurveyRepository {
  add: (data: TAddSurveyParams) => Promise<void>
}
