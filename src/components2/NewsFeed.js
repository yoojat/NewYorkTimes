import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  WebView
} from "react-native";
import NewsItem from "./NewsItem";
import { COMMON_STYLES, BG_COLOR } from "../styles/global";
export default class NewsFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: props.news,
      modalVisible: false
    };
  }
  _onModalOpen = url => {
    this.setState({
      ...this.state,
      modalVisible: true,
      modalUrl: url
    });
  };

  _onModalClose = () => {
    this.setState({
      ...this.state,
      modalVisible: false
    });
  };

  _renderModal = () => {
    return (
      <Modal
        visible={this.state.modalVisible}
        onRequestClose={this._onModalClose}
        animationType="slide"
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={this._onModalClose}
            style={styles.closeButton}
          >
            <Text style={styles.plainText}>close</Text>
            {/* FIXME: Small Text로 바꿀것 */}
          </TouchableOpacity>
          <WebView scalesPageToFit source={{ uri: this.state.modalUrl }} />
        </View>
      </Modal>
    );
  };

  _renderRow = item => {
    return (
      <NewsItem
        onPress={() => this._onModalOpen(item.url)}
        style={styles.newsItem}
        imageUrl={item.imageUrl}
        title={item.title}
        description={item.description}
        date={item.date}
        author={item.author}
        location={item.location}
        index={parseInt(item.key)}
      />
    );
  };
  render() {
    return (
      <View style={COMMON_STYLES.pageContainer}>
        <FlatList
          data={this.props.news}
          renderItem={({ item }) => this._renderRow(item)}
        />
        {this._renderModal()}
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

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: BG_COLOR
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row"
  },
  plainText: {
    color: "white",
    paddingLeft: 10
  }
});
