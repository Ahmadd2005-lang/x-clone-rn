import { Text, View,Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">
          {/* DEMO IMAGE */}
          <View className="items-center">
            <Image 
              source={require("../../assets/images/auth2.png")}
              className="size-96"
              resizeMode="contain"
            />

            <View className="flex-col gap-2">
              <TouchableOpacity>

              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
