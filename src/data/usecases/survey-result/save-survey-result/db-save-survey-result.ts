import { ILoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result-repository'
import { ISaveSurveyResultRepository, ISaveSurveyResult } from './db-save-survey-result-protocols'

export class DbSaveSurveyResult implements ISaveSurveyResult {
  constructor (
    private readonly saveSurveyResultRepository: ISaveSurveyResultRepository,
    private readonly loadSurveyResultRepository: ILoadSurveyResultRepository
  ) {}

  async save (data: ISaveSurveyResult.Params): ISaveSurveyResult.Result {
    await this.saveSurveyResultRepository.save(data)
    const surveyResult = await this.loadSurveyResultRepository.loadBySurveyId(data.surveyId, data.accountId)
    return surveyResult
  }
}
