import { ISaveSurveyResult } from '@/domain/usecases/survey-result'
import { DbSaveSurveyResult } from '@/data/usecases/survey-result/save-survey-result'
import { SurveyResultMongoRepository } from '@/infra/db/mongodb/survey-result'

export const makeDbSaveSurveyResult = (): ISaveSurveyResult => {
  const surveyResultMongoRepository = new SurveyResultMongoRepository()
  return new DbSaveSurveyResult(surveyResultMongoRepository, surveyResultMongoRepository)
}
