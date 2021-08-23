import { TSurveyModel } from '@/domain/models/survey'

export interface ILoadSurveys {
  load: () => Promise<TSurveyModel[]>
}
