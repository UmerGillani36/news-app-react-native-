import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CustomCard = ({ data }) => (
  <Card style={styles.card}>
    <Card.Title
      title={data.creator ? data.creator : "Anonymous"}
      subtitle={data.pubDate}
      left={LeftContent}
    />
    <Card.Content style={styles.cardContent}>
      <Text variant="titleLarge">{data.title ? data.title : "Anonymous"}</Text>
      <Text variant="bodyMedium">{data.description}</Text>
    </Card.Content>
    <Card.Cover
      source={{
        uri: data.image_url ? data.image_url : "https://picsum.photos/700",
      }}
      style={styles.image}
    />
    <Card.Actions style={styles.action}>
      <Button mode="contained" style={{ width: "100%" }}>
        Read More
      </Button>
    </Card.Actions>
  </Card>
);

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
