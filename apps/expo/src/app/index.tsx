import { useState } from "react";
import { View } from "react-native";
import { Button, Switch, Text } from "@acme/rn-ui/src";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const textPrimary = "text-primary";
  const textDestructive = "text-destructive-foreground";
  const [textColor, setTextColor] = useState<string>(textPrimary);

  const [disableBtn, setDisableBtn] = useState<boolean>(false);

  return (
    <View className="flex-1 gap-4">
      <View className="flex items-center">
        <Text className={`text-xl ${textColor}`}>{t("helloWorld")}</Text>
      </View>
      <View className="flex items-center">
        <Button
          disabled={disableBtn}
          onPress={() =>
            setTextColor((prev) =>
              prev === textPrimary ? textDestructive : textPrimary,
            )
          }
        >
          <Text>Change text color</Text>
        </Button>
      </View>
      <View className="flex flex-row items-center justify-center gap-4">
        <Text>Disable Button</Text>
        <Switch checked={disableBtn} onCheckedChange={setDisableBtn} />
      </View>
    </View>
  );
}
