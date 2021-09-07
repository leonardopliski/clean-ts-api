export type TSurveyModel = {
  id: string
  question: string
  answers: TSurveyAnswerModel[]
  date: Date
  didAnswer?: boolean
}

type TSurveyAnswerModel = {
  image?: string
  answer: string
}
