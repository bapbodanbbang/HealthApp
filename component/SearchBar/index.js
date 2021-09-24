import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const SearchBar = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: 100,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBar;