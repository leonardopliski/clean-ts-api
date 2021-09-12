import { MongoHelper, QueryBuilder } from '../helpers'
import { TSurveyModel } from '@/domain/models'
import { IAddSurveyRepository, ILoadSurveysRepository } from '@/data/protocols/db/survey'
import { ILoadSurveyByIdRepository } from '@/data/usecases/survey/load-survey-by-id/db-load-survey-by-id-protocols'
import { ObjectId } from 'mongodb'

export class SurveyMongoRepository implements IAddSurveyRepository, ILoadSurveysRepository, ILoadSurveyByIdRepository {
  async add (data: IAddSurveyRepository.Params): Promise<IAddSurveyRepository.Result> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(data)
  }

  async loadAll (accountId: string): Promise<TSurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const query = new QueryBuilder().lookup({
      from: 'surveyResults',
      foreignField: 'surveyId',
      localField: '_id',
      as: 'result'
    }).project({
      _id: 1,
      question: 1,
      answers: 1,
      date: 1,
      didAnswer: {
        $gte: [
          {
            $size: {
              $filter: {
                input: '$result',
                as: 'item',
                cond: {
                  $eq: ['$$item.accountId', new ObjectId(accountId)]
                }
              }
            }
          },
          1
        ]
      }
    }).build()
    const surveys = await surveyCollection.aggregate(query).toArray()
    return surveys && MongoHelper.mapCollection(surveys)
  }

  async loadById (id: string): Promise<ILoadSurveyByIdRepository.Result> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const survey = await surveyCollection.findOne({
      _id: new ObjectId(id)
    })
    return survey && MongoHelper.map(survey)
  }
}
