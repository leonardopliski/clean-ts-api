import { TSurveyAnswerModel } from '@/domain/models/survey'

export type TAddSurveyModel = {
  question: string
  answers: TSurveyAnswerModel[]
  date: Date
}

export interface IAddSurvey {
  add: (data: TAddSurveyModel) => Promise<void>
}
