import type { FastifyReply, FastifyRequest } from 'fastify';
import { videoDTO } from '../dtos/video-dto';
import { videoToText } from '../../application/use-case/video-to-text';

export async function transformTextRoute(
	request: FastifyRequest,
	reply: FastifyReply,
): Promise<FastifyReply> {
	const { success, data, error: zodError } = videoDTO.safeParse(request.body);
	if (!success) {
		return reply
			.status(400)
			.send({ validationErrors: zodError.errors[0].message });
	}
	console.log(data);
	const { data: output } = await videoToText({ filePath: data.file });
	return reply.status(201).send(output);
}
