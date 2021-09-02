import { ILoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result-repository'
import { TSurveyResultModel } from '@/domain/models/survey-result'
import { ILoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'

export class DbLoadSurveyResult implements ILoadSurveyResult {
  constructor (private readonly loadSurveyResultRepository: ILoadSurveyResultRepository) {}

  async load (surveyId: string): Promise<TSurveyResultModel> {
    await this.loadSurveyResultRepository.loadBySurveyId(surveyId)
    return await Promise.resolve(null)
  }
}
