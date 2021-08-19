import { ValidationComposite } from './validation-composite'
import { MissingParamError } from '@/presentation/errors'
import { IValidation } from '@/presentation/protocols/validation'

interface TSut {
  sut: ValidationComposite
  validationStubs: IValidation[]
}

const makeValidation = (): IValidation => {
  class ValidationStub implements IValidation {
    validate (input: any): Error {
      return null
    }
  }
  return new ValidationStub()
}

const makeSut = (): TSut => {
  const validationStubs = [makeValidation(), makeValidation()]
  return {
    sut: new ValidationComposite(validationStubs),
    validationStubs
  }
}

describe('Validation Composite', () => {
  test('should not return anything if validation succeeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      any_field: 'any_value'
    })
    expect(error).toBeFalsy()
  })

  test('should return an error if any of the validations fails', () => {
    const { sut, validationStubs } = makeSut()
    const [,secondValidationStub] = validationStubs
    jest.spyOn(secondValidationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_param'))
    const error = sut.validate({
      any_field: 'any_value'
    })
    expect(error).toEqual(new MissingParamError('any_param'))
  })

  test('should return just the first validation error if more than one validation fails', () => {
    const { sut, validationStubs } = makeSut()
    jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new Error())
    jest.spyOn(validationStubs[1], 'validate').mockReturnValueOnce(new MissingParamError('any_param'))
    const error = sut.validate({
      any_field: 'any_value'
    })
    expect(error).toEqual(new Error())
  })
})
