export type TSurveyResultModel = {
  id: string
  surveyId: string
  accountId: string
  answer: TSurveyResultAnswerModel[]
  date: Date
}

export type TSurveyResultAnswerModel = {
  image?: string
  answer: string
}
