import { ILoadSurveyByIdRepository, ILoadSurveyById } from './db-load-survey-by-id-protocols'

export class DbLoadSurveyById implements ILoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: ILoadSurveyByIdRepository) { }

  async loadById (id: string): Promise<ILoadSurveyById.Result> {
    return await this.loadSurveyByIdRepository.loadById(id)
  }
}
