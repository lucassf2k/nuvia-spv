import Fastify from 'fastify'
import { envs } from './infrastructure/configurations/environments'
import { transform } from './infrastructure/routes/transform'

Fastify()
	.post('/transform/:file', transform)
	.listen({ port: envs.PORT, host: '0.0.0.0' })
	.then(() => console.log(`HTTP server running on PORT ${envs.PORT}`))
