import { MongoHelper } from '../helpers/mongo-helper'
import {
  ISaveSurveyResultRepository,
  TSaveSurveyResultModel,
  TSurveyResultModel
} from '@/data/usecases/save-survey-result/db-save-survey-result-protocols'

export class SurveyResultMongoRepository implements ISaveSurveyResultRepository {
  async save (data: TSaveSurveyResultModel): Promise<TSurveyResultModel> {
    console.error(data)
    const surveyResultCollection = await MongoHelper.getCollection(
      'surveyResults'
    )
    const res = await surveyResultCollection.findOneAndUpdate(
      {
        surveyId: data.surveyId,
        accountId: data.accountId
      },
      {
        $set: {
          answer: data.answer,
          date: data.date
        }
      },
      {
        upsert: true,
        returnDocument: 'after'
      }
    )
    return res.value && MongoHelper.map(res.value)
  }
}
