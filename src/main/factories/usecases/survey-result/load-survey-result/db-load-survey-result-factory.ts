import { ILoadSurveyResult } from '@/domain/usecases/survey-result'
import { DbLoadSurveyResult } from '@/data/usecases/survey-result/load-survey-result'
import { SurveyResultMongoRepository } from '@/infra/db/mongodb/survey-result'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey'

export const makeDbLoadSurveyResult = (): ILoadSurveyResult => {
  const surveyResultMongoRepository = new SurveyResultMongoRepository()
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyResult(surveyResultMongoRepository, surveyMongoRepository)
}
