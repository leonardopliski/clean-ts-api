import { ISaveSurveyResult, TSaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'
import { TSurveyResultModel } from '@/domain/models/survey-result'
import { ILoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'
import { mockSurveyResultModel } from '@/tests/domain/mocks'

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
  accountId: string

  async load (surveyId: string, accountId: string): Promise<TSurveyResultModel> {
    this.surveyId = surveyId
    this.accountId = accountId
    return await Promise.resolve(this.surveyResultModel)
  }
}
