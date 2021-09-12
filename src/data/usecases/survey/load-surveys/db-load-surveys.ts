import { ILoadSurveysRepository, ILoadSurveys } from './db-load-surveys-protocols'

export class DbLoadSurveys implements ILoadSurveys {
  constructor (private readonly loadSurveysRepository: ILoadSurveysRepository) {}

  async load (accountId: string): ILoadSurveys.Result {
    const surveys = await this.loadSurveysRepository.loadAll(accountId)
    return surveys
  }
}
