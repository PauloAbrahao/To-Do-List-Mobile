import {StyleSheet} from "react-native";
import {Config} from "../../../../../config/theme";

export const styles = StyleSheet.create({
  categoryItem: {
    gap: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  created: {
    fontFamily: Config.font.fontFamily.bold,
  },
  circle: {
    backgroundColor: Config.colors.base.gray400,
    borderRadius: 999,
    width: 30,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: Config.colors.base.gray200,
    fontFamily: Config.font.fontFamily.bold,
  }
});
