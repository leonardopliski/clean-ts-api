import { IAddSurveyRepository } from '@/data/protocols/db/survey/add-survey-repository'
import { ILoadSurveyByIdRepository } from '@/data/protocols/db/survey/load-survey-by-id-repository'
import { ILoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys-repository'
import { TAddSurveyParams } from '@/domain/usecases/survey/add-survey'
import { TSurveyModel } from '@/domain/models/survey'
import { mockSurveyModel, mockSurveyModels } from '@/domain/test'

export class AddSurveyRepositorySpy implements IAddSurveyRepository {
  addSurveyParams: TAddSurveyParams

  async add (data: TAddSurveyParams): Promise<void> {
    this.addSurveyParams = data
    return await Promise.resolve()
  }
}

export class LoadSurveyByIdRepositorySpy implements ILoadSurveyByIdRepository {
  surveyModel = mockSurveyModel()
  id: string

  async loadById (id: string): Promise<TSurveyModel> {
    this.id = id
    return await Promise.resolve(this.surveyModel)
  }
}

export class LoadSurveysRepositorySpy implements ILoadSurveysRepository {
  surveyModels = mockSurveyModels()
  callsCount = 0

  async loadAll (): Promise<TSurveyModel[]> {
    this.callsCount++
    return await Promise.resolve(this.surveyModels)
  }
}
