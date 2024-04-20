import { TouchableOpacity } from "react-native";

import { Text, View } from "@/components/Themed";
import { useCounter } from "@/store/use-counter";

const CounterScreen = () => {
  const { count, onDecrease, onIncrease } = useCounter((state) => state);

  const onPressIncreaseHandler = () => {
    onIncrease();
  };

  const onPressDecreaseHandler = () => {
    onDecrease();
  };

  return (
    <View>
      <TouchableOpacity onPress={onPressIncreaseHandler}>
        <Text className="mx-4 p-2 text-center mt-4 rounded-md bg-blue-500 !text-white">
          Increase
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDecreaseHandler}>
        <Text className="mx-4 p-2 text-center mt-4 rounded-md bg-blue-500 !text-white">
          Decrease
        </Text>
      </TouchableOpacity>
      <Text className="my-4 ml-4 text-lg md:text-sm">
        Current Count: {count}
      </Text>
    </View>
  );
};

export default CounterScreen;
