export type TSurveyModel = {
  id: string
  question: string
  answers: TSurveyAnswerModel[]
  date: Date
}

export type TSurveyAnswerModel = {
  image?: string
  answer: string
}
