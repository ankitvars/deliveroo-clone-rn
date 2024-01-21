import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import { NativeWindStyleSheet } from "nativewind";
import RestaurantScreen from "./screens/RestaurantScreen";
import LoginScreen from "./screens/LoginScreen";
import UserScreen from "./screens/UserScreen";
import { useState } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            {/* Screens */}
            {/* Only show LoginScreen if isLogin is false */}
            {!isLogin && (
              <Stack.Screen name="Login">
                {(props) => <LoginScreen {...props} setIsLogin={setIsLogin} />}
              </Stack.Screen>
            )}

            {/* Show other screens when isLogin is true */}
            {isLogin && (
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="User">
                  {(props) => <UserScreen {...props} setIsLogin={setIsLogin} />}
                </Stack.Screen>
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen
                  name="Basket"
                  component={BasketScreen}
                  options={{
                    presentation: "modal",
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="PreparingOrderScreen"
                  component={PreparingOrderScreen}
                  options={{
                    presentation: "fullScreenModal",
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Delivery"
                  component={DeliveryScreen}
                  options={{
                    presentation: "fullScreenModal",
                    headerShown: false,
                  }}
                />
              </>
            )}
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
