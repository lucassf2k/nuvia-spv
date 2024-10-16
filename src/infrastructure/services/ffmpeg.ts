import Ffmpeg from "fluent-ffmpeg";

const AUDIO_BITRATE = "192k";
const AUDIO_CHANNELS = 2;
const AUDIO_FREQUENCY = 44100;

export const FfmpegService = Object.freeze({
  toAudio: (inputPath: string, outputPath: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      Ffmpeg(inputPath)
        .output(outputPath)
        .audioBitrate(AUDIO_BITRATE)
        .audioChannels(AUDIO_CHANNELS)
        .audioFrequency(AUDIO_FREQUENCY)
        .on("end", () => resolve(false))
        .on("error", (err) => {
          console.log(err);
          reject(true);
        })
        .run();
    });
  },
});
