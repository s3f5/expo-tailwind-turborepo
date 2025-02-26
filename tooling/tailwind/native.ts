import type { Config } from "tailwindcss";

import base from "./base";

export default {
  content: base.content,
  presets: [base],
  theme: {
    extend: {
      fontFamily: {
        "geist-light": ["Geist-Light"],
        "geist-regular": ["Geist-Regular"],
        "geist-medium": ["Geist-Medium"],
      },
    },
  },
} satisfies Config;
