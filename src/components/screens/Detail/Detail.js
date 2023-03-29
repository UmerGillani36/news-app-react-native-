import React from "react";
import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import { Appbar, Text } from "react-native-paper";

const Detail = ({ route, navigation }) => {
  const data = route.params;
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <Appbar.Header elevated style={styles.header}>
          <Appbar.BackAction onPress={() => navigation.pop()} />
          <Appbar.Content title="Details" titleStyle={styles.logo} />
        </Appbar.Header>
        <View style={styles.mainContainer}>
          <View style={styles.author}>
            <Text>Author</Text>
            <Text>{data.author}</Text>
          </View>
          <View style={styles.date}>
            <Text>published At</Text>
            <Text>{data.publishedAt}</Text>
          </View>
          <View style={styles.title}>
            <Text>Title</Text>
            <Text>{data.title}</Text>
          </View>
          <View style={styles.image}>
            <Image source={data.urlToImage} />
          </View>
          <View style={styles.content}>
            <Text>Content</Text>
            <Text>{data.content}</Text>
          </View>
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
  author: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
