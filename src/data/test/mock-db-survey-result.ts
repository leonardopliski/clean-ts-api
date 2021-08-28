import { ISaveSurveyResultRepository } from '@/data/protocols/db/survey-result/save-survey-result-repository'
import { TSurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/domain/test'
import { TSaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'

export const mockSaveSurveyResultRepository = (): ISaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements ISaveSurveyResultRepository {
    async save (data: TSaveSurveyResultParams): Promise<TSurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultRepositoryStub()
}
