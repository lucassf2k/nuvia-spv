import { z } from "zod";

const REGEX_TO_VALIDATE_PATH = new RegExp(
  /^\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+$/
);

export const videoDTO = z.object({
  file: z.string(),
});
