import React, { Component } from "react";
import { TabBarIOS, Alert, Vibration, Text, StatusBar } from "react-native";
import { BAR_COLOR, LINK_COLOR } from "../styles/global";
import Search from "./Search";
import NewsFeed from "./NewsFeed";

// Set the status bar for iOS to light
StatusBar.setBarStyle("light-content");

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "newsFeed"
    };
  }

  showBookmarkAlert() {
    Vibration.vibrate();
    Alert.alert(
      "Coming Soon!",
      "We're hard at work on this feature, check back in the near future.",
      [{ text: "OK", onPress: () => console.log("User pressed OK") }]
    );
  }

  render() {
    return (
      <TabBarIOS
        barTintColor={BAR_COLOR} //bar color
        tintColor={LINK_COLOR} // font color?
        translucent={false}
      >
        <TabBarIOS.Item
          badge={4}
          systemIcon={"featured"}
          selected={this.state.tab === "newsFeed"}
          onPress={() => this.setState({ tab: "newsFeed" })}
        >
          <NewsFeed />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={"search"}
          selected={this.state.tab === "search"}
          onPress={() => this.setState({ tab: "search" })}
        >
          <Search />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={"bookmarks"}
          selected={this.state.tab === "bookmarks"}
          onPress={() => this.showBookmarkAlert()}
        >
          <Text>bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
