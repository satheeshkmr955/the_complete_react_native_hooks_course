import { ScrollView, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

import { Text, View } from "@/components/Themed";
import { randomRGB } from "@/lib/utils";
import { useState } from "react";

const ColorScreen = () => {
  const [colors, setColors] = useState<string[]>([]);

  const addColorHandler = () => {
    setColors((prevState) => {
      return [...prevState, randomRGB()];
    });
  };

  interface RenderItem {
    item: (typeof colors)[0];
    index: number;
  }

  const renderItem = (props: RenderItem) => {
    const { item } = props;

    return (
      <View
        className="h-[100px] w-[100px] mb-4 mx-4 rounded-md"
        style={{ backgroundColor: item }}
      ></View>
    );
  };

  return (
    <Animated.View className="flex-1">
      <TouchableOpacity className="mb-4" onPress={addColorHandler}>
        <Text className="mx-4 p-2 text-center mt-4 rounded-md bg-blue-500 !text-white">
          Add a color
        </Text>
      </TouchableOpacity>
      <View className="items-center flex-1 overflow-y-auto">
        <Animated.FlatList data={colors} renderItem={renderItem} />
      </View>
    </Animated.View>
  );
};

export default ColorScreen;
