import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, FlatList, Text } from "react-native";
import { COMMON_STYLES } from "../styles/global";
export default class NewsFeed extends Component {
  _renderRow = item => {
    return <Text style={{ color: "white" }}>{item.description}</Text>;
  };

  render() {
    return (
      <View style={COMMON_STYLES.pageContainer}>
        <FlatList
          data={this.props.news}
          renderItem={({ item }) => this._renderRow(item)}
        />
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
      title: "Jun Park",
      imageUrl: "https://avatars3.githubusercontent.com/u/14242795?s=460&v=4",
      description: "miso360",
      date: new Date(),
      author: "Facebook",
      location: "Menlo Park, California",
      url: "https://github.com/miso360"
    },
    {
      key: "b",
      title: "0131m",
      imageUrl: "https://avatars0.githubusercontent.com/u/25732075?s=460&v=4",
      description: "Lorem ipsum dolor sit amet, co",
      date: new Date(),
      author: "Packt Publishing",
      location: "Birmingham, UK",
      url: "https://github.com/0131mj"
    }
  ]
};
