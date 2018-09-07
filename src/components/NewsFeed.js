import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { List, ListItem } from "react-native-elements";
import { COMMON_STYLES, BG_COLOR } from "../styles/global";
export default class NewsFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: props.news,
      modalVisible: false
    };
  }

  _onModalOpen = () => {
    this.setState({
      ...this.state,
      modalVisible: true
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
            <Text>close</Text>
            {/* FIXME: Small Text로 바꿀것 */}
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View style={COMMON_STYLES.pageContainer}>
        <List>
          <FlatList
            data={this.props.news}
            renderItem={({ item }) => (
              <ListItem
                onPress={this._onModalOpen}
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
  }
});
