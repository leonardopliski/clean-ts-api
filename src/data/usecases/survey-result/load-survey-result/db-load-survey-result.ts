import { TSurveyResultModel, ILoadSurveyResultRepository, ILoadSurveyResult } from './db-load-survey-result-protocols'

export class DbLoadSurveyResult implements ILoadSurveyResult {
  constructor (private readonly loadSurveyResultRepository: ILoadSurveyResultRepository) {}

  async load (surveyId: string): Promise<TSurveyResultModel> {
    await this.loadSurveyResultRepository.loadBySurveyId(surveyId)
    return await Promise.resolve(null)
  }
}
