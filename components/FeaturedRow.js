import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className=" text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          shortDescription="This is a test description"
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          shortDescription="This is a test description"
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          shortDescription="This is a test description"
          dishes={[]}
          long={20}
          lat={20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
