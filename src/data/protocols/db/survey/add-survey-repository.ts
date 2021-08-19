import { TAddSurveyModel } from '@/domain/usecases/add-survey'

export interface IAddSurveyRepository {
  add: (surveyData: TAddSurveyModel) => Promise<void>
}
