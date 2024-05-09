import {
    Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  onChangeText,
  placeholder,
  otherStyles,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${otherStyles}`}>
      <Text className="text-base text-gray-100 py-2">{title}</Text>
      <View className="w-full h-16 px-2 border-black-100 border bg-black-200 focus:border-secondary-100 rounded-2xl flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={onChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
        <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        >
            <Image 
            source={!showPassword ? icons.eye : icons.eyeHide}
            resizeMode="contain"
            className="w-6 h-6"
            />
        </TouchableOpacity>)}
      </View>
    </View>
  );
};

export default FormField;
