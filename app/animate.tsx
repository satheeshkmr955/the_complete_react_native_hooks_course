import { Button } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function Animate() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <Animated.View className="flex-1 items-center">
      <Animated.View
        className="h-[100px] bg-[#b58df1] rounded-[20px] my-[64px]"
        style={{ width }}
      />
      <Button onPress={handlePress} title="Click me" />
    </Animated.View>
  );
}
