import { TAddSurveyModel } from '@/domain/usecases/survey/add-survey'

export interface IAddSurveyRepository {
  add: (surveyData: TAddSurveyModel) => Promise<void>
}
