import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

type CarouselItem = {
  id: string;
  title: string;
  src: string;
};

const data: CarouselItem[] = [
  { id: "1", title: "Imagem 1", src: "https://picsum.photos/400/200?random=1" },
  { id: "2", title: "Imagem 2", src: "https://picsum.photos/400/200?random=2" },
  { id: "3", title: "Imagem 3", src: "https://picsum.photos/400/200?random=3" },
];

export default function Carrossel() {
  return (
    <Carousel
      loop
      width={width}
      height={220}
      autoPlay
      data={data}
      scrollAnimationDuration={1000}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.src }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#111b2e",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  text: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "600",
  },
});
