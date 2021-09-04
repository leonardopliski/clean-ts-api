import { LogControllerDecorator } from './log-controller-decorator'
import { ILogErrorRepository } from '@/data/protocols/db/log/log-error-repository'
import { THttpRequest, THttpResponse, IController } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers'
import { mockLogErrorRepository } from '@/data/test'
import { mockAccountModel } from '@/domain/test'

const mockRequest = (): THttpRequest => {
  return {
    body: {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
  }
}

const mockServerError = (): THttpResponse => {
  const fakeError = new Error()
  fakeError.stack = 'any_stack'
  return serverError(fakeError)
}

interface TSut {
  sut: LogControllerDecorator
  controllerStub: IController
  logErrorRepositoryStub: ILogErrorRepository
}

const makeController = (): IController => {
  class ControllerStub implements IController {
    async handle (httpRequest: THttpRequest): Promise<THttpResponse> {
      return await Promise.resolve(ok(mockAccountModel()))
    }
  }
  const controllerStub = new ControllerStub()
  return controllerStub
}

const makeSut = (): TSut => {
  const controllerStub = makeController()
  const logErrorRepositoryStub = mockLogErrorRepository()
  const sut = new LogControllerDecorator(controllerStub, logErrorRepositoryStub)
  return { sut, controllerStub, logErrorRepositoryStub }
}

describe('LogController Decorator', () => {
  test('should call controller handle', async () => {
    const { sut, controllerStub } = makeSut()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(handleSpy).toHaveBeenCalledWith(httpRequest)
  })

  test('should return the same result of the controller', async () => {
    const { sut } = makeSut()
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(ok(mockAccountModel()))
  })

  test('should call LogErrorRepository with correct error if controller returns a server error', async () => {
    const { sut, controllerStub, logErrorRepositoryStub } = makeSut()

    const logSpy = jest.spyOn(logErrorRepositoryStub, 'logError')
    jest.spyOn(controllerStub, 'handle').mockReturnValueOnce(Promise.resolve(mockServerError()))
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(logSpy).toBeCalledWith('any_stack')
  })
})
