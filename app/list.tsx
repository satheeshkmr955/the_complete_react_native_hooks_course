import Animated from "react-native-reanimated";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "75348" },
    { name: "Friend #2", age: "26126" },
    { name: "Friend #3", age: "71320" },
    { name: "Friend #4", age: "89672" },
    { name: "Friend #5", age: "49992" },
    { name: "Friend #6", age: "45566" },
    { name: "Friend #7", age: "24053" },
    { name: "Friend #8", age: "47252" },
    { name: "Friend #9", age: "75904" },
    { name: "Friend #10", age: "3330" },
    { name: "Friend #11", age: "79282" },
    { name: "Friend #12", age: "30771" },
  ];

  interface RenderItem {
    item: (typeof friends)[0];
    index: number;
  }

  const renderItem = (props: RenderItem) => {
    const { item, index } = props;

    return (
      <Animated.View className="my-[50px] mx-[30px]" key={index}>
        <Animated.Text>
          {item.name} - Age {item.age}
        </Animated.Text>
      </Animated.View>
    );
  };

  return (
    <Animated.View className="mt-10">
      <Animated.FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </Animated.View>
  );
};

export default ListScreen;
