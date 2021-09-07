import { ILoadSurveysRepository, TSurveyModel, ILoadSurveys } from './db-load-surveys-protocols'

export class DbLoadSurveys implements ILoadSurveys {
  constructor (private readonly loadSurveysRepository: ILoadSurveysRepository) {}

  async load (accountId: string): Promise<TSurveyModel[]> {
    const surveys = await this.loadSurveysRepository.loadAll(accountId)
    return surveys
  }
}
