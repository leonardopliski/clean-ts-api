import { ISaveSurveyResult, TSaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'
import { TSurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/domain/test'
import { ILoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'

export const mockSaveSurveyResult = (): ISaveSurveyResult => {
  class SaveSurveyResultStub implements ISaveSurveyResult {
    async save (data: TSaveSurveyResultParams): Promise<TSurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultStub()
}

export const mockLoadSurveyResult = (): ILoadSurveyResult => {
  class LoadSurveyResultStub implements ILoadSurveyResult {
    async load (surveyId: string): Promise<TSurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new LoadSurveyResultStub()
}
