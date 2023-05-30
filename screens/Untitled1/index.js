import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Axios2 from "https://cdn.jsdelivr.net/npm/axios@1.3.4/+esm";
const URL = "https://jsonplaceholder.typicode.com/todos";

const Untitled1 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!data) {
      Axios2.get(URL).then(result => {
        setData(result.data.map(r => r.title));
      }).catch(err => {
        setError(err);
      });
    }
  }, []);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  }
});
export default Untitled1;