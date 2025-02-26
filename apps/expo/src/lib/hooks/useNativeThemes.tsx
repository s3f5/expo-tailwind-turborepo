import type { Theme } from "@react-navigation/native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useUnstableNativeVariable } from "nativewind";

export function useNativeThemes(): { lightTheme: Theme; darkTheme: Theme } {
  const primary = useUnstableNativeVariable("--blue-600") as string;
  const background = useUnstableNativeVariable("--grey-100") as string;
  const border = useUnstableNativeVariable("--grey-400") as string;
  const card = useUnstableNativeVariable("--grey-200") as string;
  const notification = useUnstableNativeVariable("--red-600") as string;
  const text = useUnstableNativeVariable("--grey-950") as string;

  const colors = {
    primary: primary,
    background: background,
    border: border,
    card: card,
    notification: notification,
    text: text,
  };

  return {
    lightTheme: {
      ...DefaultTheme,
      colors: colors,
    },
    darkTheme: {
      ...DarkTheme,
      colors: colors,
    },
  };
}
