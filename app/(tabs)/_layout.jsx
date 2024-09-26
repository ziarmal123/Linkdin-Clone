import { Link, Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable } from 'react-native';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#191919",
        headerTitleAlign:'center'
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='home' color={color} />
          ),
          headerRight:()=>(
            <Link href='/search' asChild>
              <Pressable>
                {({pressed})=>(
                  <FontAwesome
                  name='search'
                  size={25}
                  color='gray'
                    style={{marginRight:15,opacity:pressed?0.5:1}}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />
        <Tabs.Screen
        name="mynetwork"
        options={{
          title: 'My Network',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="group" size={24} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="post"
        options={{
          title: 'Post',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="plus-square-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="bell" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="suitcase" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
