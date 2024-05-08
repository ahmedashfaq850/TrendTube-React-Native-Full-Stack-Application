import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView className="h-[100%]">
        <View className="h-[85vh] w-full justify-center items-center">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[270px] h-40"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative mt-5">
            <Text className="font-bold text-3xl text-white text-center">
              Unleash Trends, Embrace the Future.{" "}
              <Text className="text-secondary-100">Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              className="absolute top-[52px] right-[80px] w-[80px]"
            />
            <Text className="text-gray-100 text-center mt-7 px-4">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with TrendTube
            </Text>
          </View>
          <CustomButton
            title="Continue with Email"
            onPress={() => {
              router.push("/sign-in");
            }}
            buttonCustomStyle="w-[90%] mt-10"
          />
          <StatusBar style="light" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
