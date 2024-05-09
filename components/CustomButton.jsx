import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({ title, onPress, buttonCustomStyle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`${buttonCustomStyle}`}
    >
      <LinearGradient
        className="py-4 px-5 rounded-lg text-center"
        colors={["#00C2FF", "#0066FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text className="text-center text-primary font-[500] text-xl">
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
