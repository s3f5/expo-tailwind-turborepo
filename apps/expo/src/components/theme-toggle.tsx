import { useEffect } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useColorScheme } from "~/lib/hooks/useColorScheme";
import { MoonStar } from "~/lib/icons/moon-star";
import { Sun } from "~/lib/icons/sun";

export function ThemeToggle() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();
  const animation = useSharedValue(isDarkColorScheme ? 1 : 0);

  const toggleColorScheme = () => {
    const newTheme = isDarkColorScheme ? "light" : "dark";
    setColorScheme(newTheme);
    animation.value = withTiming(Number(isDarkColorScheme), { duration: 500 });
  };

  useEffect(() => {
    animation.value = withTiming(Number(isDarkColorScheme), { duration: 500 });
  }, [animation, isDarkColorScheme]);

  const sunStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animation.value, [0, 1], [1, 0]),
      transform: [
        { rotate: `${interpolate(animation.value, [0, 1], [0, 90])}deg` },
        { scale: interpolate(animation.value, [0, 1], [1, 0]) },
      ],
    };
  });

  const moonStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animation.value, [0, 1], [0, 1]),
      transform: [
        { rotate: `${interpolate(animation.value, [0, 1], [-90, 0])}deg` },
        { scale: interpolate(animation.value, [0, 1], [0, 1]) },
      ],
    };
  });

  return (
    <Pressable onPress={toggleColorScheme}>
      <View className="h-[40px] w-[40px] items-center justify-center">
        <Animated.View style={sunStyle} className="absolute">
          <Sun size={24} strokeWidth={1.25} />
        </Animated.View>
        <Animated.View style={moonStyle} className="absolute">
          <MoonStar size={23} strokeWidth={1.25} />
        </Animated.View>
      </View>
    </Pressable>
  );
}
