import Ffmpeg from 'fluent-ffmpeg';

export const FfmpegService = Object.freeze({
	toAudio: (inputPath: string, outputPath: string): Promise<boolean> => {
		return new Promise((resolve, reject) => {
			Ffmpeg(inputPath)
				.output(outputPath)
				.on('end', () => resolve(true))
				.on('error', () => {
					reject(false);
				})
				.run();
		});
	},
});
