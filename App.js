import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "./components/button";
import ImageViewer from "./components/image-viewer";

export default function App() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={
            image
              ? { uri: image }
              : require("./assets/images/background-image.png")
          }
        />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" onPress={pickImage}>
          Choose a photo
        </Button>
        <Button>Use this photo</Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 100,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
