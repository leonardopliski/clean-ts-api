import { SurveyMongoRepository } from '@/infra/db/mongodb/survey'
import { MongoHelper } from '@/infra/db/mongodb/helpers'
import { mockAddAccountParams, mockAddSurveyParams } from '@/tests/domain/mocks'
import { TSaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'
import { Collection } from 'mongodb'
import ObjectID from 'bson-objectid'

let surveyCollection: Collection
let surveyResultCollection: Collection
let accountCollection: Collection

const mockAccountId = async (): Promise<string> => {
  const res = await accountCollection.insertOne(mockAddAccountParams())
  return res.ops[0]._id
}

const makeSut = (): SurveyMongoRepository => {
  return new SurveyMongoRepository()
}

describe('SurveyMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({})
    surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    await surveyResultCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  describe('add()', () => {
    test('should add a survey on success', async () => {
      const sut = makeSut()
      await sut.add(mockAddSurveyParams())
      const count = await surveyCollection.countDocuments()
      expect(count).toBe(1)
    })
  })

  describe('loadAll()', () => {
    test('should load all surveys on success', async () => {
      const accountId = await mockAccountId()
      const addSurveyModels = [mockAddSurveyParams(), mockAddSurveyParams()]
      const result = await surveyCollection.insertMany(addSurveyModels)
      const survey = result.ops[0]
      const surveyResultParams: TSaveSurveyResultParams = {
        accountId,
        surveyId: survey._id,
        answer: survey.answers[0].answer,
        date: new Date()
      }
      await surveyResultCollection.insertOne(surveyResultParams)
      const sut = makeSut()
      const surveys = await sut.loadAll(accountId)
      expect(surveys.length).toBe(2)
      expect(surveys[0].id).toBeTruthy()
      expect(surveys[0].question).toBe(addSurveyModels[0].question)
      expect(surveys[0].didAnswer).toBe(true)
      expect(surveys[1].question).toBe(addSurveyModels[1].question)
      expect(surveys[1].didAnswer).toBe(false)
    })

    test('should return an empty list when there are no surveys', async () => {
      const accountId = await mockAccountId()
      const sut = makeSut()
      const surveys = await sut.loadAll(accountId)
      expect(surveys.length).toBe(0)
    })
  })

  describe('loadById()', () => {
    test('should load survey by id on success', async () => {
      const res = await surveyCollection.insertOne(mockAddSurveyParams())
      const sut = makeSut()
      const survey = await sut.loadById(res.ops[0]._id)
      expect(survey).toBeTruthy()
      expect(survey.id).toBeTruthy()
    })

    test('should return null if survey does not exists', async () => {
      const sut = makeSut()
      const survey = await sut.loadById(new ObjectID().toHexString())
      expect(survey).toBeFalsy()
    })
  })

  describe('loadAnswers()', () => {
    test('should load answers on success', async () => {
      const res = await surveyCollection.insertOne(mockAddSurveyParams())
      const survey = res.ops[0]
      const sut = makeSut()
      const answers = await sut.loadAnswers(survey._id)
      expect(answers).toEqual([survey.answers[0].answer, survey.answers[1].answer])
    })

    test('should return empty array if survey does not exists', async () => {
      const sut = makeSut()
      const answers = await sut.loadAnswers(new ObjectID().toHexString())
      expect(answers).toEqual([])
    })
  })

  describe('checkById()', () => {
    test('should return true if survey exists', async () => {
      const res = await surveyCollection.insertOne(mockAddSurveyParams())
      const sut = makeSut()
      const exists = await sut.checkById(res.ops[0]._id)
      expect(exists).toBe(true)
    })

    test('should return false if survey does not exists', async () => {
      const sut = makeSut()
      const exists = await sut.checkById(new ObjectID().toHexString())
      expect(exists).toBe(false)
    })
  })
})
