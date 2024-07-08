import type { FastifyReply, FastifyRequest } from 'fastify';
import { videoDTO } from '../dtos/video-dto';

export function transformAudioRoute(
	request: FastifyRequest,
	reply: FastifyReply,
): FastifyReply {
	const { success, data, error: zodError } = videoDTO.safeParse(request.body);
	if (!success) {
		return reply
			.status(400)
			.send({ validationErrors: zodError.errors[0].message });
	}
	return reply.send(data);
}
