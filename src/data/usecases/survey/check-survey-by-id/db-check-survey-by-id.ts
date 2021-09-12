import { ICheckSurveyByIdRepository, ICheckSurveyById } from './db-check-survey-by-id-protocols'

export class DbCheckSurveyById implements ICheckSurveyById {
  constructor (private readonly checkSurveyByIdRepository: ICheckSurveyByIdRepository) { }

  async checkById (id: string): Promise<ICheckSurveyById.Result> {
    return await this.checkSurveyByIdRepository.checkById(id)
  }
}
