import {StyleSheet} from "react-native";
import {Config} from "../../config/theme";

export const styles = StyleSheet.create({
  headerContainer: {
    height: 220,
    backgroundColor: Config.colors.base.gray700,
  },
  headerLogo: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: 30,
  },
  logo: {
    width: 200,
    height: 100,
  },
  container: {
    gap: 4,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: -60,
  },
});
