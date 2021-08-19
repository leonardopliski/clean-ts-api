import { TSurveyModel } from '@/domain/models/survey'

export interface ILoadSurveysRepository {
  loadAll: () => Promise<TSurveyModel[]>
}
