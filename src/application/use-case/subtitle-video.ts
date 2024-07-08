import type { ApiError } from './api-error';

export type SubtitleVideoInput = {
	file: string;
};

export type SubtitleVideoOutput = {
	error: ApiError;
	data: unknown;
};

export function subtitleVideo(input: SubtitleVideoInput): SubtitleVideoOutput {
	return {
		data: input.file,
		error: {
			hasError: true,
		},
	};
}
