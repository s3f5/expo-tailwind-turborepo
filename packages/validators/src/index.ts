import { z } from "zod";

export const unused = z
  .string()
  .describe(
    `As your application grows and you need other validators to share, you can put them in here`,
  );
