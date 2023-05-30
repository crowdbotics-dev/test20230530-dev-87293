import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import { isEqual } from "lodash";

const Untitled1 = () => {
  const [ie, setIe] = useState(0);
  if (isEqual(1, 1)) setIe(11);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text>{ie}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  }
});
export default Untitled1;