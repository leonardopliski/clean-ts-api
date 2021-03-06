import { setupApp } from '@/main/config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'
import { Express } from 'express'
import request from 'supertest'

let accountCollection: Collection
let app: Express

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
    app = await setupApp()
  })

  beforeEach(async () => {
    accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  describe('POST /signup', () => {
    test('should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Leonardo',
          email: 'leonardopliski@gmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('should return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'Leonardo',
        email: 'leonardopliski@gmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'leonardopliski@gmail.com',
          password: '123'
        })
        .expect(200)
    })

    test('should return 401 on login failure', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'leonardopliski@gmail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
