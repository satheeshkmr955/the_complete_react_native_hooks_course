import { useState } from "react";
import { TextInput } from "react-native";
import Animated from "react-native-reanimated";

const TextInputScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeNameHandler = (value: string) => {
    setName(value);
  };

  const onChangePasswordHandler = (value: string) => {
    setPassword(value);
  };

  return (
    <Animated.ScrollView className="flex-1 overflow-x-auto m-[15px]">
      <Animated.Text className="mb-2">Enter Name:</Animated.Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        className="border-black border-[1px] rounded-md p-3 mb-2"
        value={name}
        onChangeText={onChangeNameHandler}
        placeholder="Enter name"
      />
      <Animated.Text className="mb-2">
        My name is <Animated.Text className="font-bold">{name}</Animated.Text>
      </Animated.Text>
      <Animated.View className="bg-gray-500 w-[100%] h-[1px] rounded mb-2"></Animated.View>
      <Animated.Text className="mb-2">Enter Password:</Animated.Text>
      <TextInput
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        className="border-black border-[1px] rounded-md p-3 mb-2"
        value={password}
        onChangeText={onChangePasswordHandler}
        placeholder="Enter password"
      />
      <Animated.Text className="mb-2">
        My Password is{" "}
        <Animated.Text className="font-bold">{password}</Animated.Text>
      </Animated.Text>
    </Animated.ScrollView>
  );
};

export default TextInputScreen;
