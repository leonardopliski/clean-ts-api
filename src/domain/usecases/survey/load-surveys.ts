import { TSurveyModel } from '@/domain/models'

export interface ILoadSurveys {
  load: (accountId: string) => Promise<TSurveyModel[]>
}
