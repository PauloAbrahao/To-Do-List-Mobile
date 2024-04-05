import {StyleSheet} from "react-native";
import {Config} from "../../../../config/theme";

export const styles = StyleSheet.create({
  inputContainer: {
    width: "70%",
    height: 54,
    padding: 16,
    color: Config.colors.base.gray700,
    backgroundColor: Config.colors.base.gray500,
    borderRadius: 6,
    marginTop: 40,
  },
  inputColor: {
    color: Config.colors.base.gray100,
  },
});
