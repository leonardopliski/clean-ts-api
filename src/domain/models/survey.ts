export type TSurveyModel = {
  id: string
  question: string
  answers: TSurveyAnswerModel[]
  date: Date
}

type TSurveyAnswerModel = {
  image?: string
  answer: string
}
