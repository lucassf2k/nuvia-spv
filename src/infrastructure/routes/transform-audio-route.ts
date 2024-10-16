import type { FastifyReply, FastifyRequest } from "fastify";
import { videoDTO } from "../dtos/video-dto";
import { videoToAudio } from "../../application/use-case/video-to-audio";
import type { InputVideoToAudio } from "../../application/use-case/video-to-text";

export async function transformAudioRoute(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<FastifyReply> {
  const { success, data, error: zodError } = videoDTO.safeParse(request.body);
  if (!success) {
    return reply
      .status(400)
      .send({ validationErrors: zodError.errors[0].message });
  }
  const input: InputVideoToAudio = {
    filePath: data.file,
  };
  const output = await videoToAudio(input.filePath);
  if (output.error) return reply.status(401).send("error");
  return reply.status(201).send({ file: output.outputPath });
}
