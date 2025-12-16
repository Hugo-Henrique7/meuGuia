import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function HomeScreen(){
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Header/>
        <Text>Hugãooo</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0a1628'
  },
})

{/*backgroundColor: '#ff6347',*/}