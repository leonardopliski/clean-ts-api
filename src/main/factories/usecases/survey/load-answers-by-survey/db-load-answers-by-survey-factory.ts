import { ILoadAnswersBySurvey } from '@/domain/usecases/survey'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey'
import { DbLoadAnswersBySurvey } from '@/data/usecases/survey/load-answers-by-survey'

export const makeDbLoadAnswersBySurvey = (): ILoadAnswersBySurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadAnswersBySurvey(surveyMongoRepository)
}
