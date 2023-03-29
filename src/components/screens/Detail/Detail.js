import React from "react";
import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import { Appbar, Text } from "react-native-paper";

const Detail = ({ route, navigation }) => {
  const data = route.params.data;
  console.log("data123", data);
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <Appbar.Header elevated style={styles.header}>
          <Appbar.BackAction onPress={() => navigation.pop()} />
          <Appbar.Content title="Details" titleStyle={styles.logo} />
        </Appbar.Header>
        <View style={styles.mainContainer}>
          <Image
            source={{
              uri: data.urlToImage,
            }}
            style={{ width: "100%", height: 250 }}
          />
          <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
            {data.author ? data.author : "Anonymous"}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            {data.publishedAt}
          </Text>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", paddingHorizontal: 10 }}
          >
            {data.title}
          </Text>
          <Text style={{ fontSize: 16, paddingHorizontal: 10 }}>
            {data.content}
          </Text>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default Detail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    display: "flex",
  },
  logo: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
  },
});
