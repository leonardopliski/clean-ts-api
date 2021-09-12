import { LoadSurveysController } from '@/presentation/controllers/survey/load-surveys'
import { LoadSurveysSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/domain/mocks'
import { noContent, ok, serverError } from '@/presentation/helpers'
import MockDate from 'mockdate'
import faker from 'faker'

const mockRequest = (): LoadSurveysController.Request => ({
  accountId: faker.datatype.uuid()
})

interface TSut {
  sut: LoadSurveysController
  loadSurveysSpy: LoadSurveysSpy
}

const makeSut = (): TSut => {
  const loadSurveysSpy = new LoadSurveysSpy()
  const sut = new LoadSurveysController(loadSurveysSpy)
  return {
    sut,
    loadSurveysSpy
  }
}

describe('LoadSurveys Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('should call LoadSurveys with correct value', async () => {
    const { sut, loadSurveysSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(loadSurveysSpy.accountId).toBe(request.accountId)
  })

  test('should return 200 on success', async () => {
    const { sut, loadSurveysSpy } = makeSut()
    const response = await sut.handle(mockRequest())
    expect(response).toEqual(ok(loadSurveysSpy.surveyModels))
  })

  test('should return 204 if LoadSurveys returns empty', async () => {
    const { sut, loadSurveysSpy } = makeSut()
    loadSurveysSpy.surveyModels = []
    const response = await sut.handle(mockRequest())
    expect(response).toEqual(noContent())
  })

  test('should return 500 if LoadSurveys throws', async () => {
    const { sut, loadSurveysSpy } = makeSut()
    jest.spyOn(loadSurveysSpy, 'load').mockImplementationOnce(throwError)
    const response = await sut.handle(mockRequest())
    expect(response).toEqual(serverError(new Error()))
  })
})
