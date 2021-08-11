import { IHttpRequest, IValidation, IAddSurvey, IAddSurveyModel } from './add-survey-controller-protocols'
import { AddSurveyController } from './add-survey-controller'
import { badRequest, noContent, serverError } from '../../../helpers'

interface ISutTypes {
  sut: AddSurveyController
  validationStub: IValidation
  addSurveyStub: IAddSurvey
}

const makeFakeRequest = (): IHttpRequest => ({
  body: {
    question: 'any_question',
    answers: [
      {
        image: 'any_image',
        answer: 'any_answer'
      }
    ]
  }
})

const makeValidation = (): IValidation => {
  class ValidationStub implements IValidation {
    validate (input: any): Error {
      return null
    }
  }
  const validationStub = new ValidationStub()
  return validationStub
}

const makeAddSurvey = (): IAddSurvey => {
  class AddSurveyStub implements IAddSurvey {
    async add (data: IAddSurveyModel): Promise<void> {
      return await new Promise(resolve => resolve(null))
    }
  }
  const addSurveyStub = new AddSurveyStub()
  return addSurveyStub
}

const makeSut = (): ISutTypes => {
  const validationStub = makeValidation()
  const addSurveyStub = makeAddSurvey()
  const sut = new AddSurveyController(validationStub, addSurveyStub)
  return {
    sut,
    validationStub,
    addSurveyStub
  }
}

describe('AddSurvey Controller', () => {
  test('should call Validation with correct values', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('should return 400 if Validation fails', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new Error())
    const httpRequest = makeFakeRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  test('should call AddSurvey with correct values', async () => {
    const { sut, addSurveyStub } = makeSut()
    const addSpy = jest.spyOn(addSurveyStub, 'add')
    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)
    expect(addSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('should return 500 if AddSurvey throws', async () => {
    const { sut, addSurveyStub } = makeSut()
    jest.spyOn(addSurveyStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
