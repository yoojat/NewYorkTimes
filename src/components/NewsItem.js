import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActionSheetIOS
} from "react-native";
import Byline from "./Byline";
import AppText from "./AppText";
import Thumbnail from "./Thumbnail";
import { ACCENT_COLORS } from "../styles/global";

export default class NewsItem extends Component {
  constructor(props) {
    super(props);

    this.onLongPress = this.onLongPress.bind(this);
  }

  onLongPress() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Bookmark", "Cancel"],
        cancelButtonIndex: 1,
        title: this.props.title
      },
      buttonIndex => console.log("Button selected", buttonIndex)
    );
  }

  render() {
    const {
      style,
      imageUrl,
      title,
      author,
      date,
      location,
      description,
      onPress
    } = this.props;
    const accentColor = ACCENT_COLORS[this.props.index % ACCENT_COLORS.length];
    return (
      <TouchableOpacity
        style={style}
        onLongPress={this.onLongPress}
        onPress={onPress}
      >
        <View>
          <Thumbnail
            url={imageUrl}
            titleText={title}
            accentColor={accentColor}
            style={styles.thumbnail}
            accentColor={ACCENT_COLORS[0]}
          />
          <View style={styles.content}>
            <Byline author={author} date={date} location={location} />
            <AppText>{description}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string,
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  style: View.propTypes.style
};

const styles = StyleSheet.create({
  thumbnail: {
    marginBottom: 5
  },
  content: {
    paddingHorizontal: 5
  }
});
