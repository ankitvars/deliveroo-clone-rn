import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        alt={title}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-teal-50 font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
