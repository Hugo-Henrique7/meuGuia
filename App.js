import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.container}>
        <HomeScreen/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
