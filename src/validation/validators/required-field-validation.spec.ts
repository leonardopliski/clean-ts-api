import { MissingParamError } from '../../presentation/errors'
import { RequiredFieldValidation } from './required-field-validation'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('any_field')
}

describe('RequiredField Validation', () => {
  test('should return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const result = sut.validate({
      name: 'any_name'
    })
    expect(result).toEqual(new MissingParamError('any_field'))
  })

  test('should not return anything if validation succeeds', () => {
    const sut = makeSut()
    const result = sut.validate({
      any_field: 'any_value'
    })
    expect(result).toBeFalsy()
  })
})
