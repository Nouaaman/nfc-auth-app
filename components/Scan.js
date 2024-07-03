import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { wp } from "../helpers/common";
import { FontAwesome6 } from "@expo/vector-icons";

// import NfcManager, { NfcTech } from "react-native-nfc-manager";
// NfcManager.start();

const Scan = () => {
  // const [token, setToken] = useState("");
  // const [nfcId, setNfcId] = useState("");

  return (
    <View className="flex-1 justify-center items-center">
      <View
        className="bg-cyan-200 p-3 rounded-full"
        style={{
          width: wp(50),
          height: wp(50),
          backgroundColor: "#a5f3fc",
        }}
      >
        <Pressable
          className=" flex-1 bg-cyan-500 p-6 rounded-full justify-center items-center"
          onPress={() => {
            alert("NFC");
          }}
        >
          <FontAwesome6 name="nfc-symbol" size={50} color="#cffafe" />
          <Text className="text-center text-white text-2xl font-semibold">
            NFC
          </Text>
        </Pressable>
      </View>
      <Text className=" text-xl font-extrabold mt-6">S'authentifier</Text>
      <Text className="text-sm color-slate-500">
        Appuyez et rapprochez un NFC de votre appareil
      </Text>
    </View>
  );
};

export default Scan;
