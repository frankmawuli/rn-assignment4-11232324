import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  const route = useRoute();
  const data = route.params;

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <View style={styles.text}>
            <Text style={styles.userName}>{data?.name}</Text>
            <Text style={styles.welcomeMessage}>{data?.email}</Text>
          </View>
          <View style={styles.image}>
          <TouchableOpacity>
            <Image style={styles.profilePicture} source={require("../../icons/Ellipse.png")} />
            <View style={styles.dotContainer}>
            <Image style={styles.dot} source={require("../../icons/Ellipse 767.png")} />
            </View>
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <Image source={require("../../icons/search.1 1.png")} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search a job or position"
            />
          </View>
          <TouchableOpacity style={styles.searchBtn}>
            <Image
              source={require("../../icons/filter.5.png")}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginRight: 10,
    padding: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  welcomeMessage: {
    fontSize: 20,
    marginTop: 2,
    color: "#95969D",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
    margin: 10,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    marginRight: 12,
    paddingLeft: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: "100%",
    backgroundColor: "#AFB0B6",
    color: "#95969D",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  searchBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AFB0B6",
  },
  searchBtnImage: {
    width: 26,
    height: 26,
  },
  text: {
    flex: 1,
  },
  dotContainer: {
    position: 'absolute',
    height: 15,
    width: 15,
    borderRadius: 10,
    right: 1,
    top: -1,
    backgroundColor: 'white',
  },
  dot: {
    marginTop: 3.5,
    marginLeft: 3,
  },
  profilePicture: {
    position: 'relative',
  }
});
