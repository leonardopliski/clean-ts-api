import { MongoHelper } from '@/infra/db/mongodb/helpers'
import { ILogErrorRepository } from '@/data/protocols/db/log/log-error-repository'

export class LogMongoRepository implements ILogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.insertOne({ stack, date: new Date() })
  }
}
