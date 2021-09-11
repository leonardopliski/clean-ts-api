import { LogControllerDecorator } from '@/main/decorators'
import { IController } from '@/presentation/protocols'
import { LogMongoRepository } from '@/infra/db/mongodb/log'

export const makeLogControllerDecorator = (controller: IController): IController => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
