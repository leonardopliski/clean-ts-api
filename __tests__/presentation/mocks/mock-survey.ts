import { TSurveyModel } from '@/domain/models/survey'
import { IAddSurvey, ICheckSurveyById } from '@/domain/usecases'
import { ILoadSurveys } from '@/domain/usecases/survey/load-surveys'
import { ILoadAnswersBySurvey } from '@/domain/usecases/survey/load-answers-by-survey'
import { mockSurveyModels } from '@/tests/domain/mocks'
import faker from 'faker'

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

export class LoadAnswersBySurveySpy implements ILoadAnswersBySurvey {
  result = [faker.random.word(), faker.random.word()]
  id: string

  async loadAnswers (id: string): Promise<ILoadAnswersBySurvey.Result> {
    this.id = id
    return this.result
  }
}

export class CheckSurveyByIdSpy implements ICheckSurveyById {
  result: ICheckSurveyById.Result = true
  id: string

  async checkById (id: string): Promise<ICheckSurveyById.Result> {
    this.id = id
    return this.result
  }
}
