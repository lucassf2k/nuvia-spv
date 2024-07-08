import { createReadStream } from 'node:fs';
import { OpenAiService } from '../../infrastructure/services/openai';

export type InputVideoToAudio = {
	filePath: string;
};

export type OutputVideoToAudio = {
	data: unknown;
};

export async function videoToText(
	input: InputVideoToAudio,
): Promise<OutputVideoToAudio> {
	const audioReadStream = createReadStream(input.filePath);
	const output = await OpenAiService.audioTranscription(audioReadStream);
	return { data: output };
}
