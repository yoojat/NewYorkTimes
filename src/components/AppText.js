import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { COMMON_STYLES } from "../styles/global";

const AppText = ({ children, style }) => (
  <Text style={[COMMON_STYLES.text, style]}>{children}</Text>
);

AppText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

export default AppText;
