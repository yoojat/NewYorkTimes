import React, { Component } from "react";
import { TabBarIOS, Text, Vibration, Alert, StatusBar } from "react-native";
import { BAR_COLOR, LINK_COLOR } from "../styles/global";
import Search from "./Search";
import NewsFeed from "./NewsFeed";

const NEWS_FEED = "NEWS_FEED";
const SEARCH = "SEARCH";
const BOOK_MARKS = "BOOK_MARKS";

StatusBar.setBarStyle("light-content");

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: NEWS_FEED
    };
  }

  _shiftTab = target => {
    if (target === NEWS_FEED || SEARCH) {
      this.setState({
        ...this.state,
        tab: target
      });
    }
  };
  _showBookmarkAlert = () => {
    Vibration.vibrate();
    Alert.alert(
      "Coming Soon!",
      "We're hard at work on this feature, check back in the near future.",
      [{ text: "OK", onPress: () => console.log("User pressed OK") }]
    );
  };

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          badge={4}
          systemIcon={"featured"}
          selected={this.state.tab === NEWS_FEED}
          onPress={() => this._shiftTab(NEWS_FEED)}
        >
          <NewsFeed />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={"search"}
          selected={this.state.tab === SEARCH}
          onPress={() => this._shiftTab(SEARCH)}
        >
          <Search />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={"bookmarks"}
          selected={this.state.tab === BOOK_MARKS}
          onPress={this._showBookmarkAlert}
        >
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
