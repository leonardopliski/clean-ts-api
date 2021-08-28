import { TSurveyModel } from '@/domain/models/survey'
import { IAddSurvey, TAddSurveyParams } from '@/domain/usecases/survey/add-survey'
import { ILoadSurveys } from '@/domain/usecases/survey/load-surveys'
import { mockSurvey, mockSurveyModels } from '@/domain/test'
import { ILoadSurveyById } from '@/domain/usecases/survey/load-survey-by-id'

export const mockAddSurvey = (): IAddSurvey => {
  class AddSurveyStub implements IAddSurvey {
    async add (data: TAddSurveyParams): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }
  }
  const addSurveyStub = new AddSurveyStub()
  return addSurveyStub
}

export const mockLoadSurveys = (): ILoadSurveys => {
  class LoadSurveysStub implements ILoadSurveys {
    async load (): Promise<TSurveyModel[]> {
      return await new Promise(resolve => resolve(mockSurveyModels()))
    }
  }
  return new LoadSurveysStub()
}

export const mockLoadSurveyById = (): ILoadSurveyById => {
  class LoadSurveyByIdStub implements ILoadSurveyById {
    async loadById (id: string): Promise<TSurveyModel> {
      return await new Promise(resolve => resolve(mockSurvey()))
    }
  }
  return new LoadSurveyByIdStub()
}
