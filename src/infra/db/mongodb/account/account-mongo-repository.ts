import { MongoHelper } from '../helpers/mongo-helper'
import { TAccountModel } from '@/domain/models'
import { IAddAccountRepository, ILoadAccountByEmailRepository, ILoadAccountByTokenRepository, IUpdateAccessTokenRepository } from '@/data/protocols/db/account'

export class AccountMongoRepository
implements
    IAddAccountRepository,
    ILoadAccountByEmailRepository,
    IUpdateAccessTokenRepository,
    ILoadAccountByTokenRepository {
  async add (data: IAddAccountRepository.Params): Promise<IAddAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(data)
    return MongoHelper.map(result.ops[0])
  }

  async loadByEmail (email: string): Promise<TAccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      email
    })
    return account && MongoHelper.map(account)
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.updateOne({
      _id: id
    }, {
      $set: {
        accessToken: token
      }
    })
  }

  async loadByToken (token: string, role?: string): Promise<ILoadAccountByTokenRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      accessToken: token,
      $or: [
        {
          role
        },
        {
          role: 'admin'
        }
      ]
    }, {
      projection: {
        _id: 1
      }
    })
    return account && MongoHelper.map(account)
  }
}
