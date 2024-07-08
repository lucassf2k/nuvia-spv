import type { ReadStream } from 'node:fs';
import { OpenAI } from 'openai';
import { envs } from '../configurations/environments';

const openai = new OpenAI({
	apiKey: envs.OPENAI_KEY,
});

export const OpenAiService = Object.freeze({
	audioTranscription: async (
		file: ReadStream,
		prompt?: string,
		language = 'pt',
	) => {
		const output = await openai.audio.transcriptions.create({
			file,
			model: 'whisper-1',
			language,
			response_format: 'json',
			prompt,
			temperature: 0,
		});
		return output.text;
	},
});
