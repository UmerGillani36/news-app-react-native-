import axios from "axios";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import CustomCard from "../../Card";

const Home = () => {
  const [news, setNews] = useState([]);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [histoLoading, setHistoLoading] = useState(false);
  const [breakLoading, setBreakLoading] = useState(false);
  // News Api Key
  // const key = "1b754dd30a1740f99d09bcd51812add6";
  const key = "43ffc16bdfec4c4b84b8bee9ce5837ad";

  // for google news from web server
  const handleGoogleNews = () => {
    setGoogleLoading(true);
    // params
    const options = {
      method: "GET",
      url: `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`,
      params: { language: "en" },
    };
    // api hit
    axios
      .request(options)
      .then(function (response) {
        setGoogleLoading(false);
        setNews(response.data.articles);
      })
      .catch(function (error) {
        setGoogleLoading(false);
        console.error(error);
      });
  };

  //   for historical news
  const handleHistoricalNews = () => {
    setHistoLoading(true);
    // params
    const options = {
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=tesla&from=2023-02-28&sortBy=publishedAt&apiKey=${key}`,
      params: { language: "en" },
    };
    // api hit
    axios
      .request(options)
      .then(function (response) {
        setHistoLoading(false);
        setNews(response.data.articles);
      })
      .catch(function (error) {
        setHistoLoading(false);
        console.error(error);
      });
  };

  //   for breaking news
  const handleBreakingNews = () => {
    setBreakLoading(true);
    // params
    const options = {
      method: "GET",
      url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`,
      params: { language: "en" },
    };
    // api hit
    axios
      .request(options)
      .then(function (response) {
        setBreakLoading(false);
        setNews(response.data.articles);
      })
      .catch(function (error) {
        setBreakLoading(false);
        console.error(error);
      });
  };
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <Appbar.Header elevated style={styles.header}>
          <Appbar.Content title="News App" titleStyle={styles.logo} />
        </Appbar.Header>
        <View style={styles.googleActionWrapper}>
          <Text style={styles.googleActionTitle}>Live from web Server</Text>
          <Button
            mode="contained"
            onPress={handleGoogleNews}
            style={styles.button}
            disabled={breakLoading || histoLoading}
          >
            Google News
          </Button>
          <Button
            mode="contained"
            onPress={handleHistoricalNews}
            style={styles.button}
            disabled={breakLoading || googleLoading}
          >
            Historical News
          </Button>
          <Button
            mode="contained"
            onPress={handleBreakingNews}
            style={styles.button}
            disabled={histoLoading || googleLoading}
          >
            Breaking News
          </Button>
        </View>
        <>
          {googleLoading || histoLoading || breakLoading ? (
            <View
              style={{
                height: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="purple" />
            </View>
          ) : (
            <>
              <ScrollView>
                {news.length > 0 ? (
                  news.map((data, i) => <CustomCard data={data} key={i} />)
                ) : (
                  <View
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>Please Hit the Button to get News</Text>
                  </View>
                )}
              </ScrollView>
            </>
          )}
        </>
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
  button: {
    marginBottom: 10,
  },
  googleActionWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  googleActionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  dummyActionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 10,
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
