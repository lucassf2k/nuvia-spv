import type { FastifyReply, FastifyRequest } from 'fastify'
import { subtitleVideo } from '../../application/use-case/subtitle-video'
import { subtitleVideoDTO } from '../dtos/subtitle-video-dto'

export function transform(
	request: FastifyRequest,
	reply: FastifyReply,
): FastifyReply {
	const {
		success,
		data,
		error: zodError,
	} = subtitleVideoDTO.safeParse(request.params)
	if (!success) {
		return reply
			.status(400)
			.send({ validationErrors: zodError.errors[0].message })
	}
	console.log(data)
	const { data: subtitledVideo, error, message } = subtitleVideo(data)
	if (error) return reply.status(400).send({ error: message })
	return reply.status(201).send({ message: subtitledVideo })
}
