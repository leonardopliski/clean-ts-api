import { TSurveyModel } from '@/domain/models/survey'

export interface ILoadSurveys {
  load: (accountId: string) => Promise<TSurveyModel[]>
}
