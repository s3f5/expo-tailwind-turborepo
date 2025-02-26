import "@bacons/text-decoder/install";
import "../styles.css";

import { useLayoutEffect, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "@acme/rn-ui/src";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeProvider } from "@react-navigation/native";
import GeistLight from "assets/fonts/Geist-Light.ttf";
import GeistMedium from "assets/fonts/Geist-Medium.ttf";
import GeistRegular from "assets/fonts/Geist-Regular.ttf";
import i18n from "i18n.config";
import { I18nextProvider } from "react-i18next";

import { ThemeToggle } from "~/components/theme-toggle";
import { useColorScheme } from "~/lib/hooks/useColorScheme";
import { useNativeThemes } from "~/lib/hooks/useNativeThemes";
import { QueryClientProvider } from "~/lib/providers/query-client-provider";
import { toOptions } from "~/lib/utils";

export { ErrorBoundary } from "expo-router";

export default function Root() {
  const hasMounted = useRef(false);
  const { isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);
  const { lightTheme, darkTheme } = useNativeThemes();

  useFonts({
    "Geist-Light": GeistLight,
    "Geist-Regular": GeistRegular,
    "Geist-Medium": GeistMedium,
  });

  useLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }
    setIsColorSchemeLoaded(true);

    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) return null;

  return (
    <ThemeProvider value={isDarkColorScheme ? darkTheme : lightTheme}>
      <I18nextProvider i18n={i18n}>
        <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <QueryClientProvider>
              <Stack
                initialRouteName="index"
                screenOptions={{
                  headerShown: true,
                  headerTitle(props) {
                    return (
                      <Text className="text-xl font-semibold">
                        {toOptions(props.children)}
                      </Text>
                    );
                  },
                  headerRight: () => <ThemeToggle />,
                }}
                screenLayout={(props) => (
                  <SafeAreaView style={{ flex: 1 }}>
                    {props.children}
                  </SafeAreaView>
                )}
              />
            </QueryClientProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </I18nextProvider>
    </ThemeProvider>
  );
}
