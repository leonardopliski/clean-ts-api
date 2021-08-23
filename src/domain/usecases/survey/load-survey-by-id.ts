import { TSurveyModel } from '@/domain/models/survey'

export interface ILoadSurveyById {
  loadById: (id: string) => Promise<TSurveyModel>
}
