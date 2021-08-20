import { ILoadSurveyByIdRepository } from '@/data/protocols/db/survey/load-survey-by-id-repository'
import { TSurveyModel } from '@/domain/models/survey'
import { ILoadSurveyById } from '@/domain/usecases/load-survey-by-id'

export class DbLoadSurveyById implements ILoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: ILoadSurveyByIdRepository) { }

  async loadById (id: string): Promise<TSurveyModel> {
    await this.loadSurveyByIdRepository.loadById(id)
    return null
  }
}
