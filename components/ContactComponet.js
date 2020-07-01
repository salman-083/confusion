import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

class RenderContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Contact Information",
    };
  }
  render() {
    return (
      <Card title={"Contact Information"} style={styles.titleText}>
        <View>
          <Text style={{ margin: 30 }}>{"121, Clear Water Bay Road"}</Text>
          <Text style={{ margin: 30 }}>{"Clear Water Bay, Kowloon"}</Text>
          <Text style={{ margin: 30 }}>{"HONG KONG"}</Text>
          <Text style={{ margin: 30 }}>{"Tel: +852 1234 5678"}</Text>
          <Text style={{ margin: 30 }}>{"Fax: +852 8765 4321"}</Text>
          <Text style={{ margin: 30 }}>{"Email:confusion@food.net"}</Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RenderContact;
