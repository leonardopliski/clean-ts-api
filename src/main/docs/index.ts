import components from './components'
import schemas from './schemas'
import paths from './paths'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'Clean Node API to create surveys among programmers',
    version: '2.2.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  tags: [
    {
      name: 'Login'
    },
    {
      name: 'Survey'
    }
  ],
  servers: [
    {
      url: '/api'
    }
  ],
  schemas,
  paths,
  components
}
