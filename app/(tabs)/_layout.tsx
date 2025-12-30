import React from "react";
import { Tabs } from "expo-router";
import { assignment, attendance, doubts, home, profile } from "../../assets"

import { SvgProps } from "react-native-svg";

type TabIconProps = {
  focused: boolean;
  icon: React.FC<SvgProps>;
};

const TabIcon = ({ focused, icon: Icon }: TabIconProps) => {
  return (
    <Icon
      width={26}
      height={26}
      fill={focused ? "#225AD6" : "#999"}
    />
  );
};


const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={home} />
          ),
        }}
      />

      <Tabs.Screen
        name="Assignments"
        options={{
          title: "Assignments",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={assignment} />
          ),
        }}
      />

      <Tabs.Screen
        name="Attendance"
        options={{
          title: "Attendance",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={attendance} />
          ),
        }}
      />

      <Tabs.Screen
        name="Doubts"
        options={{
          title: "Doubts",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={doubts} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={profile} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
