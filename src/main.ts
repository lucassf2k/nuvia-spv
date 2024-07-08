import Fastify from 'fastify';
import { envs } from './infrastructure/configurations/environments';
import { transformAudioRoute } from './infrastructure/routes/transform-audio-route';
import { transformTextRoute } from './infrastructure/routes/transform-text-route';

Fastify()
	.post('/videos/text', transformTextRoute)
	.post('/videos/audio', transformAudioRoute)
	.listen({ port: envs.PORT, host: '0.0.0.0' })
	.then(() => console.log(`HTTP server running on PORT ${envs.PORT}`));
