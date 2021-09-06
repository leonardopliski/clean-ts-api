import { TSurveyModel } from '@/domain/models/survey'
import { TAddSurveyParams } from '@/domain/usecases/survey/add-survey'
import faker from 'faker'

export const mockSurveyModel = (): TSurveyModel => ({
  id: faker.datatype.uuid(),
  question: faker.random.words(),
  answers: [
    {
      answer: faker.random.word()
    },
    {
      answer: faker.random.word(),
      image: faker.image.imageUrl()
    }
  ],
  date: faker.date.recent()
})

export const mockSurveyModels = (): TSurveyModel[] => [
  mockSurveyModel(),
  mockSurveyModel()
]

export const mockAddSurveyParams = (): TAddSurveyParams => ({
  question: faker.random.words(),
  answers: [
    {
      image: faker.image.imageUrl(),
      answer: faker.random.word()
    },
    {
      answer: faker.random.word()
    }
  ],
  date: faker.date.recent()
})
