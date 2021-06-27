const { Router } = require('express')
const axios = require('axios')
const formatData = require('./functions/formatResponse')

const getLastFiveRepos = Router()

getLastFiveRepos.get('/', async (_req, res) => {
  try {
    const { data } = await axios.get('https://api.github.com/orgs/takenet/repos')
    return res.status(200).send(formatData(data))
  } catch (error) {
    return res.status(500).send(`${error}`)
  }
})

module.exports = getLastFiveRepos
