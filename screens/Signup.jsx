import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Emoji from "react-native-emoji";
import { useNavigation } from "@react-navigation/native";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Signup = () => {
  const navigation = useNavigation();

  const handleChange = (value, id) => {
    return setFormData({
      ...formData,
      [id]: value,
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.background}>
        <View style={styles.backgroundText}>
          <Text style={styles.nametext}>Jobziz</Text>

          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back</Text>
            <Emoji name="wave" style={styles.emoji} />
          </View>

          <Text style={styles.description}>Let's log in. Apply to jobs!</Text>
        </View>
        <View style={styles.signup}>
          <TextInput
            style={styles.name}
            onChangeText={(valueFromInput) => setName(valueFromInput)}
            id="name"
            placeholder="Name"
          />
          <TextInput
            style={styles.email}
            onChangeText={(emailFromInput) => setEmail(emailFromInput)}
            keyboardType="email-address"
            id="email"
            placeholder="Email"
          />

          <TouchableOpacity
            disabled={name.length < 3 || email.length < 3}
            style={styles.button}
            onPress={() => {
              setIsFormFilled(true);
              navigation.navigate("Home", {
                name,
                email,
              });
            }}
          >
            <Text style={styles.buttonText}>
              {name.length > 3 && email.length > 3
                ? capitalizeFirstLetter("Login")
                : capitalizeFirstLetter("Fill form information")}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.options}>
          <View style={styles.line} />
          <Text style={styles.optionstext}>Or continue with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.iconscontainer}>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={require("../components/icons/appleoption.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={require("../components/icons/googleoption.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={require("../components/icons/facebookoption.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.account}>
          <Text style={styles.request}>Haven't an account? </Text>
          <TouchableOpacity>
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    marginLeft: 15,
    backgroundColor: "#F5F5F5",
  },
  backgroundText: {
    justifyContent: "center",
  },
  nametext: {
    color: "#356899",
    fontSize: 22,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
  },
  title: {
    color: "#0D0D26",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    paddingTop: 7,
  },
  emoji: {
    paddingTop: -4,
    fontSize: 30,
  },
  description: {
    color: "#0D0D26",
    fontSize: 14,
    marginBottom: 50,
  },
  name: {
    height: 52,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#AFB0B6",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },
  email: {
    height: 52,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#AFB0B6",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 30,
  },
  button: {
    width: "100%",
    height: 56,
    backgroundColor: "#356899",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  optionstext: {
    color: "#AFB0B6",
    marginHorizontal: 20,
    fontSize: 14,
    alignItems: "center",
    marginLeft: -15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#AFB0B6",
    marginRight: 35,
  },
  iconscontainer: {
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
    marginLeft: 40,
    marginBottom: 60,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 90,
  },
  image: {
    height: 26,
    width: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    height: 56,
    width: 56,
    backgroundColor: "blue",
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  account: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -35,
  },
  request: {
    color: "#BDBEC2",
  },
  register: {
    color: "purple",
  },
  signup: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
  },
});
