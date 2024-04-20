import { Text, View } from "@/components/Themed";
import { Image, ImageSourcePropType } from "react-native";

interface ImageDetailProps {
  title: string;
  imageSource: ImageSourcePropType;
  score: number;
}

export const ImageDetail = (props: ImageDetailProps) => {
  const { title, imageSource, score } = props;
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};
