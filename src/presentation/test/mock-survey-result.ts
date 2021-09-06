import { ISaveSurveyResult, TSaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'
import { TSurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/domain/test'
import { ILoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'

export class SaveSurveyResultSpy implements ISaveSurveyResult {
  surveyResultModel = mockSurveyResultModel()
  saveSurveyResultParams: TSaveSurveyResultParams

  async save (data: TSaveSurveyResultParams): Promise<TSurveyResultModel> {
    this.saveSurveyResultParams = data
    return await Promise.resolve(this.surveyResultModel)
  }
}

export class LoadSurveyResultSpy implements ILoadSurveyResult {
  surveyResultModel = mockSurveyResultModel()
  surveyId: string

  async load (surveyId: string): Promise<TSurveyResultModel> {
    this.surveyId = surveyId
    return await Promise.resolve(this.surveyResultModel)
  }
}
