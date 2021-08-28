export const loginPath = {
  post: {
    tags: ['Login'],
    summary: 'API to auth an user',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loginParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/account'
            }
          }
        }
      },
      401: {
        description: 'Unauthorized'
      },
      400: {
        description: 'Bad Request'
      }
    }
  }
}
