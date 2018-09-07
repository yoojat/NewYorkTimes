import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList } from "react-native";
import { COMMON_STYLES } from "../styles/global";
export default class NewsFeed extends Component {
  render() {
    return (
      <View style={COMMON_STYLES.pageContainer}>
        <FlatList />
        {/* ListView Deprcated */}
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
      title: "React Native",
      imageUrl: "https://facebook.github.io/react/img/logo_og.png",
      description: "Build Native Mobile Apps using JavaScript and React",
      date: new Date(),
      author: "Facebook",
      location: "Menlo Park, California",
      url: "https://facebook.github.io/react-native"
    },
    {
      title: "Packt Publishing",
      imageUrl: "https://www.packtpub.com/sites/default/files/packt_logo.png",
      description: "Stay Relevant",
      date: new Date(),
      author: "Packt Publishing",
      location: "Birmingham, UK",
      url: "https://www.packtpub.com/"
    }
  ]
};
