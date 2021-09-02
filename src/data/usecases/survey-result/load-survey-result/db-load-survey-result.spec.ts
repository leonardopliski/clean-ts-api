import { DbLoadSurveyResult } from './db-load-survey-result'
import { ILoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result-repository'
import { mockLoadSurveyResultRepository } from '@/data/test'

type TSut = {
  sut: DbLoadSurveyResult
  loadSurveyResultRepositoryStub: ILoadSurveyResultRepository
}

const makeSut = (): TSut => {
  const loadSurveyResultRepositoryStub = mockLoadSurveyResultRepository()
  const sut = new DbLoadSurveyResult(loadSurveyResultRepositoryStub)
  return {
    sut,
    loadSurveyResultRepositoryStub
  }
}

describe('DbLoadSurveyResult UseCase', () => {
  test('should call LoadSurveyResultRepository', async () => {
    const { sut, loadSurveyResultRepositoryStub } = makeSut()
    const loadBySurveyIdSpy = jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyId')
    await sut.load('any_survey_id')
    expect(loadBySurveyIdSpy).toHaveBeenCalledWith('any_survey_id')
  })
})
