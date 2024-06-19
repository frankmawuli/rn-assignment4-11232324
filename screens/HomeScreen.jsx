import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Welcome from "../components/home/welcome/Welcome";
import PopularJobs from "../components/home/popular/PopularJobs";
import FeaturedJobs from "../components/home/featured/FeaturedJobs";
import Signup from "./Signup";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={StyleSheet.scrollview}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Welcome />
          <FeaturedJobs />
          <PopularJobs />
          {/* <Signup /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    width: "100%",
  },
  contentContainer: {
    flexGrow: 1,
  },
});
