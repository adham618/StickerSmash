import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./components/button";
import ImageViewer from "./components/image-viewer";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={require("./assets/images/background-image.png")}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary">Choose a photo</Button>
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
