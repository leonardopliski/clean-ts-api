import { TSurveyModel } from '@/domain/models/survey'
import { IAddSurvey } from '@/domain/usecases'
import { ILoadSurveys } from '@/domain/usecases/survey/load-surveys'
import { ILoadSurveyById } from '@/domain/usecases/survey/load-survey-by-id'
import { mockSurveyModel, mockSurveyModels } from '@/tests/domain/mocks'

export class AddSurveySpy implements IAddSurvey {
  addSurveyParams: IAddSurvey.Params

  async add (data: IAddSurvey.Params): Promise<IAddSurvey.Result> {
    this.addSurveyParams = data
    return await Promise.resolve()
  }
}

export class LoadSurveysSpy implements ILoadSurveys {
  surveyModels = mockSurveyModels()
  accountId: string

  async load (accountId: string): Promise<TSurveyModel[]> {
    this.accountId = accountId
    return await Promise.resolve(this.surveyModels)
  }
}

export class LoadSurveyByIdSpy implements ILoadSurveyById {
  surveyModel = mockSurveyModel()
  id: string

  async loadById (id: string): Promise<TSurveyModel> {
    this.id = id
    return await Promise.resolve(this.surveyModel)
  }
}
