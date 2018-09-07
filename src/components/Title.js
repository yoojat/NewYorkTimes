import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";
import AppText from "./AppText";
import { HEADER_TEXT_COLOR, BG_COLOR } from "../styles/global";

const Title = ({ style, children }) => (
  <AppText style={[styles.title, style]}>{children}</AppText>
);

Title.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "HelveticaNeue-CondensedBold",
    fontSize: 18,
    color: HEADER_TEXT_COLOR,
    backgroundColor: `${BG_COLOR}99`
  }
});

export default Title;
