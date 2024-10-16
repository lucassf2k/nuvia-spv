import { FfmpegService } from "../../infrastructure/services/ffmpeg";
import axios from "axios";
import fs from "node:fs";
import path from "node:path";

export type InputVideoToAudio = {
  filePath: string;
};

export type OutputVideoToAudio = {
  outputPath: unknown;
  error: boolean;
};

import Ffmpeg from "fluent-ffmpeg";

const AUDIO_BITRATE = "192k";
const AUDIO_CHANNELS = 2;
const AUDIO_FREQUENCY = 44100;

const OUTPUT_PATH = "/home/lucassf/repos/nuvia-spv/resources/";

export async function videoToAudio(input: string): Promise<OutputVideoToAudio> {
  // Faz o download do arquivo da URL
  const response = await axios({
    url: input,
    method: "GET",
    responseType: "stream",
  });

  // Define o caminho temporário para salvar o arquivo baixado

  const paths = input.split("/");
  const fileName = paths[paths.length - 1].split(".")[0];
  const filePath = `${OUTPUT_PATH}${fileName}.mp3`;
  await new Promise((resolve, reject) => {
    Ffmpeg(response.data)
      .output(OUTPUT_PATH)
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
  //const hasError = await FfmpegService.toAudio(input, filePath);
  return { outputPath: OUTPUT_PATH, error: false };
}
