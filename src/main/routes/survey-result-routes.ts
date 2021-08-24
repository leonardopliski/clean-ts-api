import { makeSaveSurveyResultController } from '@/main/factories/controllers/survey-result/save-survey-result/save-survey-result-controller-factory'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { adminAuth } from '@/main/middlewares/admin-auth'
import { Router } from 'express'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', adminAuth, adaptRoute(makeSaveSurveyResultController()))
}
