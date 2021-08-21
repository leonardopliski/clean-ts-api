import { DbLoadSurveys } from './db-load-surveys'
import { ILoadSurveysRepository, TSurveyModel } from './db-load-surveys-protocols'
import MockDate from 'mockdate'

const makeFakeSurveys = (): TSurveyModel[] => ([
  {
    id: 'any_id',
    question: 'any_question',
    answers: [
      {
        image: 'any_image',
        answer: 'any_answer'
      }
    ],
    date: new Date()
  },
  {
    id: 'other_id',
    question: 'other_question',
    answers: [
      {
        image: 'other_image',
        answer: 'other_answer'
      }
    ],
    date: new Date()
  }
])

interface TSut {
  sut: DbLoadSurveys
  loadSurveysRepositoryStub: ILoadSurveysRepository
}

const makeLoadSurveysRepository = (): ILoadSurveysRepository => {
  class LoadSurveysRepositoryStub implements ILoadSurveysRepository {
    async loadAll (): Promise<TSurveyModel[]> {
      return await new Promise(resolve => resolve(makeFakeSurveys()))
    }
  }
  return new LoadSurveysRepositoryStub()
}

const makeSut = (): TSut => {
  const loadSurveysRepositoryStub = makeLoadSurveysRepository()
  const sut = new DbLoadSurveys(loadSurveysRepositoryStub)
  return {
    sut,
    loadSurveysRepositoryStub
  }
}

describe('DbLoadSurveys', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('should call LoadSurveysRepository', async () => {
    const { sut, loadSurveysRepositoryStub } = makeSut()
    const loadAllSpy = jest.spyOn(loadSurveysRepositoryStub, 'loadAll')
    await sut.load()
    expect(loadAllSpy).toHaveBeenCalled()
  })

  test('should return a list of Surveys on success', async () => {
    const { sut } = makeSut()
    const surveys = await sut.load()
    expect(surveys).toEqual(makeFakeSurveys())
  })

  test('should throw if LoadSurveysRepository throws', async () => {
    const { sut, loadSurveysRepositoryStub } = makeSut()
    jest
      .spyOn(loadSurveysRepositoryStub, 'loadAll')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error()))
      )
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})
