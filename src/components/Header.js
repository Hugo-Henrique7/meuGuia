import { View, StyleSheet, Text } from "react-native";

export default function Header(){
  return(
    <View style={styles.header}>
      <Text>Hugo Henrique</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: 200,
    width: '100%'
  },

  header:{
    backgroundColor: '#abc9'
  }
})