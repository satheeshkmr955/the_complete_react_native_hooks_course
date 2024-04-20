import { View } from "@/components/Themed";
import { ImageDetail } from "@/components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Beach"
        imageSource={require("../assets/images/beach.jpg")}
        score={10}
      />
    </View>
  );
};

export default ImageScreen;
