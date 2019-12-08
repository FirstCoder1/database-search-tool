import React from "react";
import { Text, View, Button, Platform, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import colors from "../constants/colors";
// will use this later as the auth screen with log in and register options

const MainAppScreen = props => (
  <View style={styles.centered}>
    <Text>MainAppScreen</Text>
    <Button
      title="Search for cards"
      onPress={() => {
        props.navigation.navigate("CardSearch");
      }}
    />
    <Button
      title="View your collection"
      onPress={() => {
        props.navigation.navigate("SavedCards");
      }}
    />
  </View>
);
MainAppScreen.navigationOptions = navData => {
  return {
    headerTitle: "Main Application Screen",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default MainAppScreen;