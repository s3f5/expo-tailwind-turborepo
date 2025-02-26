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

function toOptions(name: string) {
  return name
    .split("-")
    .map(function (str: string) {
      return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
      });
    })
    .join(" ");
}

export { cn, toOptions };
