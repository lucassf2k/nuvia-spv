import { FfmpegService } from '../../infrastructure/services/ffmpeg';

export type InputVideoToAudio = {
	filePath: string;
};

export type OutputVideoToAudio = {
	outputPath: unknown;
	error: boolean;
};

const OUTPUT_PATH =
	'/home/lucassf/repos/studies/college/nuvia/back-nuvia-ssv/resources/';

export async function videoToAudio(
	input: InputVideoToAudio,
): Promise<OutputVideoToAudio> {
	const paths = input.filePath.split('/');
	const fileName = paths[paths.length - 1].split('.')[0];
	const filePath = `${OUTPUT_PATH}${fileName}.mp3`;
	const hasError = await FfmpegService.toAudio(input.filePath, filePath);
	if (hasError) return { outputPath: undefined, error: hasError };
	return { outputPath: filePath, error: hasError };
}
