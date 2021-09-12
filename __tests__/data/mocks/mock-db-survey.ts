import { IAddSurveyRepository, ILoadSurveyByIdRepository, ILoadSurveysRepository, ICheckSurveyByIdRepository } from '@/data/protocols/db/survey'
import { TSurveyModel } from '@/domain/models/survey'
import { mockSurveyModel, mockSurveyModels } from '@/tests/domain/mocks'

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
    return await Promise.resolve(this.result)
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
  surveyModels = mockSurveyModels()
  accountId: string

  async loadAll (accountId: string): Promise<TSurveyModel[]> {
    this.accountId = accountId
    return await Promise.resolve(this.surveyModels)
  }
}
