import { InvalidParamError } from '../../errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('any_field', 'any_field_to_compare')
}

describe('CompareFields Validation', () => {
  test('should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const result = sut.validate({
      any_field: 'any_name',
      any_field_to_compare: 'different_value'
    })
    expect(result).toEqual(new InvalidParamError('any_field_to_compare'))
  })

  test('should not return anything if validation succeeds', () => {
    const sut = makeSut()
    const result = sut.validate({
      any_field: 'any_name',
      any_field_to_compare: 'any_name'
    })
    expect(result).toBeFalsy()
  })
})
