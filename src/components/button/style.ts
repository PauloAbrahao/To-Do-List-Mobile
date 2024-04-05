import {StyleSheet} from "react-native";
import {Config} from "../../config/theme";

export const styles = StyleSheet.create({
  buttonContainer: {
    height: 52,
    width: 52,
    backgroundColor: Config.colors.product.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
});
