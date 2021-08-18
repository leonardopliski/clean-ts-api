export interface ISurveyModel {
  id: string
  question: string
  answers: ISurveyAnswerModel[]
  date: Date
}

export interface ISurveyAnswerModel {
  image?: string
  answer: string
}
