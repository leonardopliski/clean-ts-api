import { LoadSurveyResultController } from './load-survey-result-controller'
import { THttpRequest } from './load-survey-result-controller-protocols'
import { mockLoadSurveyById } from '@/presentation/test'

const makeFakeRequest = (): THttpRequest => ({
  params: {
    surveyId: 'any_id'
  }
})

describe('LoadSurveyResult Controller', () => {
  test('should call LoadSurveyById with correct value', async () => {
    const loadSurveyByIdStub = mockLoadSurveyById()
    const sut = new LoadSurveyResultController(loadSurveyByIdStub)
    const loadByIdSpy = jest.spyOn(loadSurveyByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadByIdSpy).toHaveBeenCalledWith('any_id')
  })
})
