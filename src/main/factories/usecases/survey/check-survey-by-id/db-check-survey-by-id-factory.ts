import { ICheckSurveyById } from '@/domain/usecases/survey'
import { DbCheckSurveyById } from '@/data/usecases/survey'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey'

export const makeDbCheckSurveyById = (): ICheckSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbCheckSurveyById(surveyMongoRepository)
}
