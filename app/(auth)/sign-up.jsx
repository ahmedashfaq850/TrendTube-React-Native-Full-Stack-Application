import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { useState } from "react";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = () => {};

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView className="h-full">
        <View className="min-h-[85vh] p-5 flex  ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[270px] h-40"
          />
          <Text className="text-white font-psemibold text-2xl">Sign up</Text>
          <FormField
            title="Username"
            value={form.username}
            onChangeText={(e) => setForm({ ...form, username: e })}
            placeholder="Enter your username"
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            onChangeText={(e) => setForm({ ...form, email: e })}
            placeholder="Enter your email"
            otherStyles="mt-7"
          />
          <FormField
            title="Password"
            value={form.password}
            onChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Enter your Password"
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            onPress={() => {
              handleSubmit;
            }}
            buttonCustomStyle="w-[100%] mt-10"
          />

          <Text className="text-white text-18 mt-7 text-center">
            Already have an account?{" "}
            <Link className="text-secondary-100" href="/sign-in">
              Login
            </Link>
          </Text>

          <StatusBar style="light" backgroundColor="black" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
