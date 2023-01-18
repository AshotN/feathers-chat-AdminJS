import { app } from './app'
import { logger } from './logger'
import { startAdminJS } from './adminjs'

const port = app.get('port')
const host = app.get('host')

app.listen(port).then(() => {
  logger.info(`Feathers app listening on http://${host}:${port}`)
})

startAdminJS()
