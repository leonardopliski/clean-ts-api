export const surveySchema = {
  type: 'object',
  properties: {
    accessToken: {
      type: 'string'
    },
    id: {
      type: 'string'
    },
    question: {
      type: 'string'
    },
    answers: {
      type: 'array',
      items: {
        $ref: '#/schemas/surveyAnswer'
      }
    },
    date: {
      type: 'string'
    }
  }
}
