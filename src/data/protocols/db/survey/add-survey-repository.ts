import { TAddSurveyParams } from '@/domain/usecases/survey/add-survey'

export interface IAddSurveyRepository {
  add: (surveyData: TAddSurveyParams) => Promise<void>
}
