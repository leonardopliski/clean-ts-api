import { IValidation } from './validation'
import { ValidationComposite } from './validation-composite'

const makeValidationStub = (): IValidation => {
  class ValidationStub implements IValidation {
    validate (input: any): Error {
      return null
    }
  }
  return new ValidationStub()
}

const makeSut = (): ValidationComposite => {
  return new ValidationComposite([makeValidationStub()])
}

describe('Validation Composite', () => {
  test('should not return anything if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      any_field: 'any_value'
    })
    expect(error).toBeFalsy()
  })

  test('should return an error if any of the validations fails', () => {
    class ValidationStub implements IValidation {
      validate (input: any): Error {
        return new Error()
      }
    }
    const validationStub = new ValidationStub()
    const sut = new ValidationComposite([validationStub])
    const error = sut.validate({
      any_field: 'any_value'
    })
    expect(error).toEqual(new Error())
  })
})
