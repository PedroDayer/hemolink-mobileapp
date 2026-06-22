import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

interface TabBarIconProps {
  focused: boolean;
  label: string;
  icon: ReactNode;
}

export const TabBarIcon = ({ focused, label, icon }: TabBarIconProps) => {
  return (
    <View
      style={[
        styles.cardTabs,
        focused ? { backgroundColor: "#C8102E" } : { backgroundColor: "transparent" },
      ]}
    >
      {icon}
      <Text style={[styles.textTabs, { color: focused ? "#FFDAD8" : "#5C5F60" }]}>
        {label}
      </Text>
    </View>
  );
};