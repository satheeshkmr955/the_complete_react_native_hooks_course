import { Text, View } from "@/components/Themed";

import { TouchableOpacity } from "react-native";

interface ColorCounterProps {
  color: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const emptyFunc = () => {};

export const ColorCounter = (props: ColorCounterProps) => {
  const { color, onIncrease = emptyFunc, onDecrease = emptyFunc } = props;

  return (
    <View>
      <Text>{color}</Text>
      <TouchableOpacity onPress={() => onIncrease()}>
        <Text className="mx-4 p-2 text-center mt-4 rounded-md bg-blue-500 !text-white">
          {`Increase ${color}`}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDecrease()}>
        <Text className="mx-4 p-2 text-center mt-4 rounded-md bg-blue-500 !text-white">
          {`Decrease ${color}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
