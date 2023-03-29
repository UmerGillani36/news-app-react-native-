import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CustomCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Card style={styles.card}>
      <Card.Title
        title={data.author ? data.author : "Anonymous"}
        subtitle={data.publishedAt ? data.publishedAt : new Date().getDate()}
        left={LeftContent}
      />
      <Card.Content style={styles.cardContent}>
        <Text variant="titleLarge">
          {data.title ? data.title : "Anonymous"}
        </Text>
        <Text variant="bodyMedium">{data.description}</Text>
      </Card.Content>
      <Card.Cover
        source={{
          uri: data.urlToImage ? data.urlToImage : "https://picsum.photos/700",
        }}
        style={styles.image}
      />
      <Card.Actions style={styles.action}>
        <Button
          mode="contained"
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("Detail", { data })}
        >
          Read More
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  card: {
    padding: 4,
    margin: 10,
  },
  cardContent: {
    marginBottom: 5,
  },
  title: {},
  image: {},
  description: {
    marginBottom: 5,
  },
  action: {
    width: "100%",
  },
});
