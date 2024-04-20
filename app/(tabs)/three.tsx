import { Text, View } from "@/components/Themed";

const ThreeTab = () => {
  const name = "satheesh";
  return (
    <View className="mt-10">
      <Text className="text-[45px]">Getting started with react native!</Text>
      <Text className="text-[20px]">My name is {name}</Text>
    </View>
  );
};

export default ThreeTab;
