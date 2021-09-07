export const surveySchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    surveyId: {
      type: 'string'
    },
    accountId: {
      type: 'string'
    },
    answer: {
      type: 'string'
    },
    date: {
      type: 'string'
    },
    didAnswer: {
      type: 'boolean'
    }
  },
  required: ['id', 'question', 'answers', 'date', 'didAnswer']
}
