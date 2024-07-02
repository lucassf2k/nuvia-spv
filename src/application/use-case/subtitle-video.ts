export type SubtitleVideoInput = {
	file: string;
};

export type SubtitleVideoOutput = {
	error: boolean;
	message: string;
	data: unknown;
};

export function subtitleVideo(input: SubtitleVideoInput): SubtitleVideoOutput {
	return { error: false, message: 'erro ao processar video', data: input.file };
}
