/* eslint-disable no-undef */
const mock = require('./mock/responseMock')
const formatResponse = require('../controllers/functions/formatResponse')

describe('Testes unitários', () => {
  test('Verifica se a resposta retorna 5 repositórios', () => {
    const response = formatResponse(mock)
    expect(response.length).toEqual(5)
  })

  test('Verifica se a resposta retorna os últimos 5 repositórios ordenados por data em ordem decrescente', () => {
    const response = formatResponse(mock)
    expect(response.length).toEqual(5)
    expect(response[0].name).toBe('library.data')
  })
})
