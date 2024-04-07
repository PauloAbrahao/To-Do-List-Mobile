import {StyleSheet} from "react-native";
import {Config} from "../../config/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  insideContainer: {
    width: "85%",
    backgroundColor: Config.colors.base.gray500,
    borderColor: Config.colors.base.gray400,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  button: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  task: {
    textAlign: "left",
    justifyContent: "center",
    marginLeft: 5,
    lineHeight: 20,
    width: "80%",
    color: Config.colors.base.gray100,
    fontSize: Config.font.fontSize.medium,
  },
  verified: {
    textDecorationLine: "line-through",
    color: Config.colors.base.gray300,
  },
});
