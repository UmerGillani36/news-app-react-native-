import axios from "axios";
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import CustomCard from "../../Card";
import * as historicalData from "../../../../historical.json";
import * as breakingData from "../../../../breaking.json";
const Home = () => {
  const [news, setNews] = useState([]);

  //   for historical news
  const handleHistoricalNews = () => {
    if (historicalData) {
      setNews(historicalData?.results);
    }
  };

  //   for breaking news
  const handleBreakingNews = () => {
    if (breakingData) {
      console.log(breakingData);
      setNews(breakingData?.results);
    }
  };
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <Appbar.Header elevated style={styles.header}>
          <Appbar.Content title="News App" titleStyle={styles.logo} />
        </Appbar.Header>
        <View style={styles.actions}>
          <Button mode="contained" onPress={handleHistoricalNews}>
            Historical News
          </Button>
          <Button mode="contained" onPress={handleBreakingNews}>
            Breaking News
          </Button>
        </View>
        <ScrollView>
          {news.length > 0 ? (
            news.map((data, i) => <CustomCard data={data} key={i} />)
          ) : (
            <Text>No Data Found</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default Home;
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
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "white",
  },
});
