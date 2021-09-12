import { ISaveSurveyResultRepository } from '@/data/protocols/db/survey-result/save-survey-result-repository'
import { ILoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result-repository'
import { TSurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/tests/domain/mocks'

export class SaveSurveyResultRepositorySpy implements ISaveSurveyResultRepository {
  result: ISaveSurveyResultRepository.Params

  async save (data: ISaveSurveyResultRepository.Params): Promise<void> {
    this.result = data
    await Promise.resolve()
  }
}

export class LoadSurveyResultRepositorySpy implements ILoadSurveyResultRepository {
  result = mockSurveyResultModel()
  surveyId: string
  accountId: string

  async loadBySurveyId (surveyId: string, accountId: string): Promise<TSurveyResultModel> {
    this.surveyId = surveyId
    this.accountId = accountId
    return await Promise.resolve(this.result)
  }
}
