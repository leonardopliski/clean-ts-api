import { accountSchema, errorSchema, loginParamsSchema, surveySchema, surveysSchema, surveyAnswerSchema, apiKeyAuthSchema, signUpParamsSchema, addSurveyParamsSchema, saveSurveyResultParamsSchema, surveyResultSchema } from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  error: errorSchema,
  survey: surveySchema,
  surveys: surveysSchema,
  surveyAnswer: surveyAnswerSchema,
  addSurveyParams: addSurveyParamsSchema,
  saveSurveyResultParams: saveSurveyResultParamsSchema,
  surveyResult: surveyResultSchema
}
