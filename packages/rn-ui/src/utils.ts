import { cx } from "class-variance-authority";
import {
  createTailwindMerge,
  getDefaultConfig,
  mergeConfigs,
} from "tailwind-merge";

const customTwMerge = createTailwindMerge(() => {
  const defaultConfig = getDefaultConfig();

  return mergeConfigs(defaultConfig, {
    extend: {
      classGroups: {
        ...defaultConfig.classGroups,
      },
    },
  });
});

const cn = (...inputs: Parameters<typeof cx>) => customTwMerge(cx(inputs));

export { cn };
