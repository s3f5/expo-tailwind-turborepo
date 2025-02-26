import type { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import * as SwitchPrimitives from "@rn-primitives/switch";
import { cva } from "class-variance-authority";
import { useUnstableNativeVariable } from "nativewind";

import { cn } from "./utils";

const switchVariants = cva(
  "flex-row items-center rounded-full border-2 border-transparent bg-transparent",
  {
    variants: {
      size: {
        default: "h-8 w-[64px]",
        sm: "h-6 w-[48px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const switchThumbVariants = cva(
  "shadow-foreground/25 rounded-full bg-background shadow-md ring-0",
  {
    variants: {
      size: {
        default: "h-7 w-7",
        sm: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const Switch = forwardRef<
  SwitchPrimitives.RootRef,
  SwitchPrimitives.RootProps & VariantProps<typeof switchVariants>
>(({ className, size, ...props }, ref) => {
  const variantWidth = size === "sm" ? 48 : 56;
  const translateX = useDerivedValue(() =>
    props.checked ? variantWidth - 20 : 0,
  );

  const border = useUnstableNativeVariable("--grey-400") as unknown as string;
  const primary = useUnstableNativeVariable("--blue-600") as unknown as string;

  const animatedRootStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      Number(props.checked),
      [0, 1],
      [border, primary],
    );
    return {
      backgroundColor: withTiming(color, { duration: 200 }),
    };
  });

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withTiming(translateX.value, { duration: 400 }) },
    ],
  }));

  return (
    <Animated.View
      style={animatedRootStyle}
      className={cn(
        "rounded-full",
        size === "sm" ? "h-6 w-[48px]" : `h-8 w-[64px]`,
        props.disabled && "opacity-50",
      )}
    >
      <SwitchPrimitives.Root
        className={cn(switchVariants({ size }), className)}
        {...props}
        ref={ref}
      >
        <Animated.View style={animatedThumbStyle}>
          <SwitchPrimitives.Thumb
            className={cn(switchThumbVariants({ size }))}
          />
        </Animated.View>
      </SwitchPrimitives.Root>
    </Animated.View>
  );
});

Switch.displayName = "Switch";

export { Switch };
