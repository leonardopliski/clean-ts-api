import { ILoadAnswersBySurvey, ILoadAnswersBySurveyRepository } from './db-load-answers-by-survey-protocols'

export class DbLoadAnswersBySurvey implements ILoadAnswersBySurvey {
  constructor (private readonly loadAnswersBySurveyRepository: ILoadAnswersBySurveyRepository) { }

  async loadAnswers (id: string): Promise<ILoadAnswersBySurvey.Result> {
    return await this.loadAnswersBySurveyRepository.loadAnswers(id)
  }
}
