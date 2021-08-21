import { ILoadSurveyByIdRepository, TSurveyModel, ILoadSurveyById } from './db-load-survey-by-id-protocols'

export class DbLoadSurveyById implements ILoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: ILoadSurveyByIdRepository) { }

  async loadById (id: string): Promise<TSurveyModel> {
    const survey = await this.loadSurveyByIdRepository.loadById(id)
    return survey
  }
}
