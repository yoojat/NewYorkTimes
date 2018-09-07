import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";

import { COMMON_STYLES } from "../styles/global";
export default class NewsFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: props.news,
      modalVisible: false
    };
  }

  render() {
    return (
      <View style={COMMON_STYLES.pageContainer}>
        <List>
          <FlatList
            data={this.props.news}
            renderItem={({ item }) => (
              <ListItem
                key={item.key}
                roundAvatar
                avatar={{ uri: item.imageUrl }}
                title={item.title}
                subtitle={item.subtitle}
              />
            )}
          />
          {/* ListView Deprcated */}
        </List>
      </View>
    );
  }
}

NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  listStyles: View.propTypes.style
};

NewsFeed.defaultProps = {
  news: [
    {
      key: "a",
      title: "React Native",
      imageUrl: "https://avatars3.githubusercontent.com/u/14242795?s=460&v=4",
      description: "Build Native Mobile Apps using JavaScript and React",
      date: new Date(),
      author: "Facebook",
      location: "Menlo Park, California",
      url: "https://github.com/miso360"
    },
    {
      key: "b",
      title: "Packt Publishing",
      imageUrl: "https://avatars0.githubusercontent.com/u/25732075?s=460&v=4",
      description: "Stay Relevant",
      date: new Date(),
      author: "Packt Publishing",
      location: "Birmingham, UK",
      url: "https://github.com/0131mj"
    }
  ]
};
