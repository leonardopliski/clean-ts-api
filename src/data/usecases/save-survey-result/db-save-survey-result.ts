import { TSaveSurveyResultModel, TSurveyResultModel, ISaveSurveyResultRepository, ISaveSurveyResult } from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements ISaveSurveyResult {
  constructor (private readonly saveSurveyResultRepository: ISaveSurveyResultRepository) {}

  async save (data: TSaveSurveyResultModel): Promise<TSurveyResultModel> {
    await this.saveSurveyResultRepository.save(data)
    return null
  }
}
