import { createReadStream } from 'node:fs';
import { OpenAiService } from '../../infrastructure/services/openai';
import { FfmpegService } from '../../infrastructure/services/ffmpeg';

export type InputVideoToAudio = {
	filePath: string;
};

export type OutputVideoToAudio = {
	data: unknown;
	error: boolean;
};

export async function videoToAudio(
	input: InputVideoToAudio,
): Promise<OutputVideoToAudio> {
	const sucess = await FfmpegService.toAudio(input.filePath, '');
	if (!sucess) return { error: true, data: undefined };
	return { data: undefined, error: false };
}
