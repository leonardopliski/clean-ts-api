import { ILoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys-repository'
import { ISurveyModel } from '@/domain/models/survey'
import { ILoadSurveys } from '@/domain/usecases/load-surveys'

export class DbLoadSurveys implements ILoadSurveys {
  constructor (private readonly loadSurveysRepository: ILoadSurveysRepository) {}

  async load (): Promise<ISurveyModel[]> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}
