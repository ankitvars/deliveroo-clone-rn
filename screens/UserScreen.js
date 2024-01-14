import React, { useLayoutEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  HeartIcon,
  MapPinIcon,
  ArrowLeftIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  ShoppingBagIcon,
  QuestionMarkCircleIcon,
  ArrowRightEndOnRectangleIcon,
} from "react-native-heroicons/outline";

const UserScreen = ({ setIsLogin }) => {
  const navigation = useNavigation();
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Implement your dark mode toggle logic here
    setDarkMode(!isDarkMode);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const user = {
    name: "John Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header with Back Button */}
      <View className="p-1 bg-white ml-2">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="p-2 rounded-full bg-slate-50 w-9"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      {/* User Profile */}
      <View className="relative p-4 items-center border-b border-gray-300 space-x-2">
        <Image
          source={{ uri: user.profilePicture }}
          className="w-20 h-20 rounded-full mb-4"
        />
        <Text className="text-xl font-bold">{user.name}</Text>
      </View>

      {/* Options */}
      <View className="p-4">
        <TouchableOpacity
          className="flex-row items-center mb-4 border-b border-gray-300 space-x-2"
          onPress={() => navigation.navigate("Orders")}
        >
          <ShoppingBagIcon className="w-6 h-6 mr-2" color="#00CCBB" />
          <Text className="text-lg my-3">Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center mb-4 border-b border-gray-300 space-x-2"
          onPress={() => navigation.navigate("Addresses")}
        >
          <MapPinIcon className="w-6 h-6 mr-2" color="#00CCBB" />
          <Text className="text-lg my-3">Addresses</Text>
        </TouchableOpacity>
        {/* Favorite Orders */}
        <TouchableOpacity
          className="flex-row items-center mb-4 border-b border-gray-300 space-x-2"
          onPress={() => navigation.navigate("FavoriteOrders")}
        >
          <HeartIcon className="w-6 h-6 mr-2" color="#00CCBB" />
          <Text className="text-lg my-3">Favorite Orders</Text>
        </TouchableOpacity>
        {/* Payment Methods */}
        <TouchableOpacity
          className="flex-row items-center mb-4 border-b border-gray-300 space-x-2"
          onPress={() => navigation.navigate("PaymentMethods")}
        >
          <CreditCardIcon className="w-6 h-6 mr-2" color="#00CCBB" />
          <Text className="text-lg my-3">Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center mb-4 border-b border-gray-300 space-x-2"
          onPress={() => navigation.navigate("Settings")}
        >
          <Cog6ToothIcon className="w-6 h-6 mr-2" color="#00CCBB" />
          <Text className="text-lg my-3">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center mb-4 border-b border-gray-300 space-x-2"
          onPress={() => navigation.navigate("Help")}
        >
          <QuestionMarkCircleIcon className="w-6 h-6 mr-2" color="#00CCBB" />
          <Text className="text-lg my-3">Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center mb-4 border-b border-gray-300 space-x-2"
          onPress={() => {
            setIsLogin(false);
          }}
        >
          <ArrowRightEndOnRectangleIcon
            className="w-6 h-6 mr-2"
            color="#00CCBB"
          />
          <Text className="text-lg my-3">Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className="p-4 mt-auto bg-gray-200">
        <Text className="text-gray-600 text-sm text-center">
          © {new Date().getFullYear()} deliverooclone. All rights reserved.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;
