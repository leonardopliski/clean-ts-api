import { MongoHelper } from '../helpers/mongo-helper'
import { TSurveyModel } from '@/domain/models/survey'
import { TAddSurveyModel } from '@/domain/usecases/add-survey'
import { IAddSurveyRepository } from '@/data/protocols/db/survey/add-survey-repository'
import { ILoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys-repository'

export class SurveyMongoRepository implements IAddSurveyRepository, ILoadSurveysRepository {
  async add (surveyData: TAddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<TSurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const surveys: TSurveyModel[] = await surveyCollection.find().toArray()
    return surveys
  }
}
