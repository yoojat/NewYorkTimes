import React, { Component } from "react";
import { TabBarIOS, Text } from "react-native";
import { BAR_COLOR, LINK_COLOR } from "../styles/global";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "newsFeed"
    };
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
          <Text>news feed</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={"search"}
          selected={this.state.tab === "search"}
          onPress={() => this.setState({ tab: "search" })}
        >
          <Text>search</Text>
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
