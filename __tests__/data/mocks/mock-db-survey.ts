import { IAddSurveyRepository, ILoadSurveyByIdRepository, ILoadSurveysRepository, ICheckSurveyByIdRepository, ILoadAnswersBySurveyRepository } from '@/data/protocols/db/survey'
import { TSurveyModel } from '@/domain/models/survey'
import { mockSurveyModel, mockSurveyModels } from '@/tests/domain/mocks'
import faker from 'faker'

export class AddSurveyRepositorySpy implements IAddSurveyRepository {
  addSurveyParams: IAddSurveyRepository.Params

  async add (data: IAddSurveyRepository.Params): Promise<IAddSurveyRepository.Result> {
    this.addSurveyParams = data
    return await Promise.resolve()
  }
}

export class LoadSurveyByIdRepositorySpy implements ILoadSurveyByIdRepository {
  result: ILoadSurveyByIdRepository.Result = mockSurveyModel()
  id: string

  async loadById (id: string): Promise<ILoadSurveyByIdRepository.Result> {
    this.id = id
    return this.result
  }
}

export class LoadAnswersBySurveyRepositorySpy implements ILoadAnswersBySurveyRepository {
  result: ILoadAnswersBySurveyRepository.Result = [faker.random.word(), faker.random.word()]
  id: string

  async loadAnswers (id: string): Promise<ILoadAnswersBySurveyRepository.Result> {
    this.id = id
    return this.result
  }
}

export class CheckSurveyByIdRepositorySpy implements ICheckSurveyByIdRepository {
  result: ICheckSurveyByIdRepository.Result = true
  id: string

  async checkById (id: string): Promise<ICheckSurveyByIdRepository.Result> {
    this.id = id
    return this.result
  }
}

export class LoadSurveysRepositorySpy implements ILoadSurveysRepository {
  result = mockSurveyModels()
  accountId: string

  async loadAll (accountId: string): Promise<TSurveyModel[]> {
    this.accountId = accountId
    return this.result
  }
}
