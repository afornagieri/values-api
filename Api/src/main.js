const express = require('express')
const getLastFiveRepos = require('./controllers/getLastFiveRepos')
require('dotenv').config()

const app = express()

app.use('/listRepos', getLastFiveRepos)

app.all('*', async (req, res) => {
  return res.status(500).send('Rota não encontrada / Inexistente')
})

app.listen(process.env.PORT, () => {
  console.log(`Ouvindo na porta ${process.env.PORT}`)
})
