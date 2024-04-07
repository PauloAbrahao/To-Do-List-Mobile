import {KeyboardAvoidingView, View} from "react-native";
import React from "react";
import {styles} from "./style";
import {LogoIcon} from "../../../assets/icons/";
import Input from "./components/input";

export const Header = () => {
  return (
    <>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.headerContainer}>
          <View style={styles.headerLogo}>
            <LogoIcon />
            <View style={styles.container}>
              <Input />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
