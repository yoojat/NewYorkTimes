import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";
import AppText from "./AppText";

const SmallText = ({ children, style }) => (
  <AppText style={[styles.small, style]}>{children}</AppText>
);

SmallText.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style
};

const styles = StyleSheet.create({
  small: {
    fontSize: 11
  }
});

export default SmallText;
