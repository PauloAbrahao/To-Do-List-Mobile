import {StyleSheet} from "react-native";
import {Config} from "../../config/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  emptyContainer: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 16,
    fontFamily: Config.font.fontFamily.bold,
    color: Config.colors.base.gray300,
  },
  subtitle: {
    color: Config.colors.base.gray300,
  },
});
