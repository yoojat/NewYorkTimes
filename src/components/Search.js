import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COMMON_STYLES, MUTED_COLOR, TEXT_COLOR } from "../styles/global";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  render() {
    return (
      <View style={COMMON_STYLES.pageContainer}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ searchText: text })}
            value={this.state.searchText}
            placeholder={"Search"}
            placeholderTextColor={MUTED_COLOR}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    color: TEXT_COLOR,
    paddingHorizontal: 5,
    flex: 1
  },
  search: {
    borderColor: MUTED_COLOR,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5
  }
});
