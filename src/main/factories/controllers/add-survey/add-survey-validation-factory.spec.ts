import { RequiredFieldValidation, ValidationComposite } from '../../../../validation/validators'
import { IValidation } from '../../../../presentation/protocols/validation'
import { makeAddSurveyValidation } from './add-survey-validation-factory'

jest.mock('../../../../validation/validators/validation-composite')

describe('LoginValidation Factory', () => {
  test('should call ValidationComposite with all validations', () => {
    makeAddSurveyValidation()
    const validations: IValidation[] = []
    for (const field of ['question', 'answers']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
