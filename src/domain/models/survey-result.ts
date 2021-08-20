export type TSurveyResultModel = {
  id: string
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export type TSurveyAnswerModel = {
  image?: string
  answer: string
}
