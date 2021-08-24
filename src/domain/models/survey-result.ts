export type TSurveyResultModel = {
  id: string
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export type TSurveyResultAnswerModel = {
  image?: string
  answer: string
}
