import { ISaveSurveyResult } from '@/domain/usecases/survey-result/save-survey-result'

export interface ISaveSurveyResultRepository {
  save: (data: ISaveSurveyResultRepository.Params) => Promise<void>
}

export namespace ISaveSurveyResultRepository {
  export type Params = ISaveSurveyResult.Params
}
