export type TSurveyResultModel = {
  surveyId: string
  question: string
  answers: TSurveyResultAnswerModel[]
  date: Date
}

type TSurveyResultAnswerModel = {
  image?: string
  answer: string
  count: number
  percent: number
  isCurrentAccountAnswer: boolean
}
