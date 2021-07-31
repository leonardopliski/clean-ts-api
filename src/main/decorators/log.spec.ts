import { ILogErrorRepository } from '../../data/protocols/db/log-error-repository'
import { IAccountModel } from '../../domain/models/account'
import { ok, serverError } from '../../presentation/helpers'
import { IHttpRequest, IHttpResponse, IController } from '../../presentation/protocols'
import { LogControllerDecorator } from './log'

const makeFakeRequest = (): IHttpRequest => {
  return {
    body: {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
  }
}

const makeFakeAccount = (): IAccountModel => ({
  id: 'valid_id',
  name: 'valid_name',
  email: 'valid_email@mail.com',
  password: 'valid_password'
})

const makeFakeServerError = (): IHttpResponse => {
  const fakeError = new Error()
  fakeError.stack = 'any_stack'
  return serverError(fakeError)
}

interface ISutTypes {
  sut: LogControllerDecorator
  controllerStub: IController
  logErrorRepositoryStub: ILogErrorRepository
}

const makeController = (): IController => {
  class ControllerStub implements IController {
    async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
      return await new Promise(resolve => resolve(ok(makeFakeAccount())))
    }
  }
  const controllerStub = new ControllerStub()
  return controllerStub
}

const makeLogErrorRepository = (): ILogErrorRepository => {
  class LogErrorRepositoryStub implements ILogErrorRepository {
    async logError (stack: string): Promise<void> {
      return await new Promise(resolve => resolve())
    }
  }
  const logErrorRepositoryStub = new LogErrorRepositoryStub()
  return logErrorRepositoryStub
}

const makeSut = (): ISutTypes => {
  const controllerStub = makeController()
  const logErrorRepositoryStub = makeLogErrorRepository()
  const sut = new LogControllerDecorator(controllerStub, logErrorRepositoryStub)
  return { sut, controllerStub, logErrorRepositoryStub }
}

describe('LogController Decorator', () => {
  test('should call controller handle', async () => {
    const { sut, controllerStub } = makeSut()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(handleSpy).toHaveBeenCalledWith(httpRequest)
  })

  test('should return the same result of the controller', async () => {
    const { sut } = makeSut()
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(ok(makeFakeAccount()))
  })

  test('should call LogErrorRepository with correct error if controller returns a server error', async () => {
    const { sut, controllerStub, logErrorRepositoryStub } = makeSut()

    const logSpy = jest.spyOn(logErrorRepositoryStub, 'logError')
    jest.spyOn(controllerStub, 'handle').mockReturnValueOnce(new Promise((resolve) => resolve(makeFakeServerError())))
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(logSpy).toBeCalledWith('any_stack')
  })
})
