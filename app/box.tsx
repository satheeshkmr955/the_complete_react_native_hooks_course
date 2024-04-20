import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const BoxScreen = () => {
  return (
    <Animated.View className="flex-row h-[100px] w-[100%] justify-between">
      <Animated.View className="w-[100px] border-[1px] bg-red-300 border-red-500"></Animated.View>
      <Animated.View className="w-[100px] border-[1px] bg-green-300 border-green-500 top-[100px]"></Animated.View>
      <Animated.View className="w-[100px] border-[1px] bg-purple-300 border-purple-500"></Animated.View>
      {/* <Animated.View
        className="w-[100px] border-[1px] bg-gray-300 border-gray-500"
        style={{ ...StyleSheet.absoluteFillObject }}
      ></Animated.View> */}
    </Animated.View>
  );
};

export default BoxScreen;
