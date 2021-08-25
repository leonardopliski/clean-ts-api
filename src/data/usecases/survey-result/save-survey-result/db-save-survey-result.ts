import { TSaveSurveyResultParams, TSurveyResultModel, ISaveSurveyResultRepository, ISaveSurveyResult } from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements ISaveSurveyResult {
  constructor (private readonly saveSurveyResultRepository: ISaveSurveyResultRepository) {}

  async save (data: TSaveSurveyResultParams): Promise<TSurveyResultModel> {
    const surveyResult = await this.saveSurveyResultRepository.save(data)
    return surveyResult
  }
}
