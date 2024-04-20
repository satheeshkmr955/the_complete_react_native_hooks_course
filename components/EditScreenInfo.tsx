import { Link } from "expo-router";

import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View className="items-center mx-[50px]">
        <Text
          className="text-[17px] leading-[24px] text-center"
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Open up the code for this screen:
        </Text>

        <View
          className="rounded-[3px] px-[4px] my-[7px]"
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
        >
          <MonoText>{path}</MonoText>
        </View>

        <Text
          className="text-[17px] leading-[24px] text-center"
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View className="mt-[15px] mx-[20px] items-center">
        <ExternalLink
          className="py-[15px]"
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text className="text-center" lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </ExternalLink>
      </View>
      <Link href={"/box"} className="text-center">
        <Text lightColor={Colors.light.tint}>Box Screen</Text>
      </Link>
      <Link href={"/text-input"} className="text-center">
        <Text lightColor={Colors.light.tint}>TextInput Screen</Text>
      </Link>
      <Link href={"/square"} className="text-center">
        <Text lightColor={Colors.light.tint}>Square Screen</Text>
      </Link>
      <Link href={"/color"} className="text-center">
        <Text lightColor={Colors.light.tint}>Color Screen</Text>
      </Link>
      <Link href={"/counter"} className="text-center">
        <Text lightColor={Colors.light.tint}>Counter Screen</Text>
      </Link>
      <Link href={"/image"} className="text-center">
        <Text lightColor={Colors.light.tint}>Image Screen</Text>
      </Link>
      <Link href={"/list"} className="text-center">
        <Text lightColor={Colors.light.tint}>List Screen</Text>
      </Link>
      <Link href={"/animate"} className="text-center">
        <Text lightColor={Colors.light.tint}>Animate Screen</Text>
      </Link>
    </View>
  );
}
