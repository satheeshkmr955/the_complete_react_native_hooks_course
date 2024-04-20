import { View } from "@/components/Themed";
import { ColorCounter } from "../components/ColorCounter";
import { useColorCounter } from "@/store/use-color-counter";

const SquareScreen = () => {
  const { red, green, blue, onIncrease, onDecrease } = useColorCounter(
    (state) => state
  );

  return (
    <View className="flex-1 overflow-y-auto">
      <ColorCounter
        onIncrease={() => onIncrease({ color: "red" })}
        onDecrease={() => onDecrease({ color: "red" })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => onIncrease({ color: "blue" })}
        onDecrease={() => onDecrease({ color: "blue" })}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => onIncrease({ color: "green" })}
        onDecrease={() => onDecrease({ color: "green" })}
        color="Green"
      />
      <View className="items-center justify-center mt-4">
        <View
          className="h-[150px] w-[150px] rounded-md"
          style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
        ></View>
      </View>
    </View>
  );
};

export default SquareScreen;
