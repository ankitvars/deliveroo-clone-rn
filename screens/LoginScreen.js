import React, { useLayoutEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ setIsLogin }) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [usernameWarning, setUsernameWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    setIsLogin(true);
  };

  const validateInput = () => {
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if username is not empty and matches the email regex
    const isUsernameValid = username.trim() !== "" && emailRegex.test(username);

    // Check if password is between 6 to 8 characters
    const isPasswordValid = password.length >= 6 && password.length <= 8;

    // Update button and warning status
    setIsButtonDisabled(!(isUsernameValid && isPasswordValid));
    setUsernameWarning(
      !isUsernameValid ? "Please enter a valid email address." : ""
    );
    setPasswordWarning(
      !isPasswordValid ? "Password must be between 6 to 8 characters." : ""
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View className="flex-1 justify-center items-center bg-white p-8">
      <Text className="text-4xl font-bold mb-2 text-customGreen">
        Welcome Back!
      </Text>
      <Text className="text-md mb-4 text-gray-700">
        Sign in to your account.
      </Text>
      <View className="mb-4 w-full">
        <Text className="mb-1 text-gray-700">Username:</Text>
        <TextInput
          onChangeText={(text) => {
            setUsername(text);
            validateInput();
          }}
          value={username}
          placeholder="Enter your username"
          placeholderTextColor="gray"
          className="border h-12 p-3 border-1 border-gray-400 rounded w-full bg-white"
        />
        {usernameWarning !== "" && (
          <Text className="text-red-500 mt-1">{usernameWarning}</Text>
        )}
      </View>
      <View className="mb-4 w-full">
        <Text className="mb-1 text-gray-700">Password:</Text>
        <TextInput
          onChangeText={(text) => {
            setPassword(text);
            validateInput();
          }}
          value={password}
          secureTextEntry
          placeholder="Enter your password"
          placeholderTextColor="gray"
          className="border h-12 p-3 border-1 border-gray-400 rounded w-full bg-white"
        />
        {passwordWarning !== "" && (
          <Text className="text-red-500 mt-1">{passwordWarning}</Text>
        )}
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        disabled={isButtonDisabled}
        className={`border-none py-1.5 px-3 rounded ${
          isButtonDisabled ? "bg-gray-300" : "bg-customGreen"
        }`}
      >
        <Text className="text-white font-bold">Login</Text>
      </TouchableOpacity>
      <Text className="mt-4 text-gray-600">
        New user? Sign up{" "}
        <Text
          className="text-customGreen underline"
          onPress={() => {
            // Add navigation logic for signup screen
          }}
        >
          here
        </Text>
        .
      </Text>
    </View>
  );
};

export default LoginScreen;
