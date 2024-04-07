import {StyleSheet} from "react-native";
import {Config} from "../../config/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: "85%",
    height: 2,
    backgroundColor: Config.colors.base.gray400,
  },
});
